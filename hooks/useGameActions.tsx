import { useEffect, useState, useRef, RefObject, useCallback } from 'react';
import {
  CANVAS_SIZE,
  COLUMNS,
  ROWS,
  NEW_VALUE_POOL,
  INITIAL_STATE,
  FILLABLE_CELLS,
  Direction,
  GameState,
} from '../utils/constants';
import {
  createGameSet,
  calculateInitialScore,
  getRandomInt,
  Level,
} from '../utils/trouble';

interface GameActionsResult {
  gameState: GameState;
  gameOn: boolean;
  startGame: (level?: Level) => void;
  gameOver: boolean;
  setGameOver: (value: boolean) => void;
  resetGame: () => void;
  canvasRef: RefObject<HTMLDivElement | null>;
  gameLevel?: Level;
  score: number;
}

interface CanvasPosition {
  startX: number;
  startY: number;
}

interface CanvasRefWithPosition extends HTMLDivElement {
  position?: CanvasPosition;
}

export default function useGameActions(): GameActionsResult {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [gameOn, setGameOn] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [addNew, setAddNew] = useState<boolean>(false);
  const [gameLevel, setGameLevel] = useState<Level | undefined>(undefined);
  const [panning, setPanning] = useState<boolean>(false);
  const canvasRef = useRef<CanvasRefWithPosition>(null);

  const SCORE = useRef<number>(0);

  useEffect(() => {
    if (addNew) {
      const newState = { ...gameState, ...getRandomCell() };
      setGameState(newState);
      setAddNew(false);
    }

    if (isGameOver()) {
      setTimeout(() => {
        setGameOver(true);
        setGameOn(false);
      }, 500);
    }
  }, [addNew, gameState]);

  const getRandomCell = (): Partial<GameState> => {
    const emptyCells = FILLABLE_CELLS.filter((cell) => !gameState[cell]);
    const cell = emptyCells[getRandomInt(emptyCells.length)];

    return { [cell]: NEW_VALUE_POOL[getRandomInt(100)] } as Partial<GameState>;
  };

  const moveOnKeyPressed = useCallback(
    (e: KeyboardEvent): void => {
      if (!gameOn) return;

      let direction: Direction | undefined;
      switch (e.keyCode) {
        case 37:
          direction = Direction.LEFT;
          break;
        case 38:
          direction = Direction.UP;
          break;
        case 39:
          direction = Direction.RIGHT;
          break;
        case 40:
          direction = Direction.DOWN;
          break;
        default:
          return;
      }

      if (direction) {
        handleMove(direction);
      }
    },
    [gameOn, gameState]
  );

  const preventTouchmoveWhenPanning = (e: TouchEvent): void => {
    if (panning) {
      e.preventDefault();
    }
  };

  const onTouchStart = (e: TouchEvent): void => {
    if (!gameOn) return;

    setPanning(true);
    if (canvasRef.current) {
      canvasRef.current.position = {
        startX: e.changedTouches[0].screenX,
        startY: e.changedTouches[0].screenY,
      };
    }
  };

  const onTouchEnd = (e: TouchEvent): void => {
    if (!gameOn || !canvasRef.current || !canvasRef.current.position) return;

    setPanning(false);
    const direction = getTouchDirection(
      e.changedTouches[0].screenX,
      e.changedTouches[0].screenY
    );
    direction && handleMove(direction);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keyup', moveOnKeyPressed);
      return () => document.removeEventListener('keyup', moveOnKeyPressed);
    }
  }, [moveOnKeyPressed]);

  useEffect(() => {
    document?.body?.addEventListener('touchmove', preventTouchmoveWhenPanning, {
      passive: false,
    });
    return () =>
      document?.body?.removeEventListener(
        'touchmove',
        preventTouchmoveWhenPanning as EventListener
      );
  }, [panning]);

  useEffect(() => {
    if (canvasRef.current === null) return;

    if (canvasRef.current) {
      canvasRef.current.addEventListener('touchstart', onTouchStart, false);
      canvasRef.current.addEventListener('touchend', onTouchEnd, false);
    }
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener(
          'touchstart',
          onTouchStart,
          false
        );
        canvasRef.current.removeEventListener('touchend', onTouchEnd, false);
      }
    };
  }, [gameOn]);

  const getGameSetWithLevel = (level: Level): GameState => {
    const set = createGameSet(level);
    if (isGameOver(set)) {
      return getGameSetWithLevel(level);
    } else {
      return set;
    }
  };

  const getDefaultGameSet = (): Partial<GameState> => {
    const cell1 = getRandomCell();
    const cell2 = getRandomCell();
    return { ...cell1, ...cell2 };
  };

  const startGame = (level?: Level): void => {
    if (gameOn) return;

    resetGame();

    setGameLevel(level);
    const set = level
      ? getGameSetWithLevel(level)
      : (getDefaultGameSet() as GameState);

    SCORE.current = calculateInitialScore(set);
    setGameState(set);
    setGameOn(true);
  };

  const resetGame = (): void => {
    setGameState(INITIAL_STATE);
    setGameOn(false);
    setGameOver(false);
    SCORE.current = 0;
  };

  const getTouchDirection = (
    endX: number,
    endY: number
  ): Direction | undefined => {
    if (!canvasRef.current || !canvasRef.current.position) return undefined;

    const { startX, startY } = canvasRef.current.position;
    const diffY = Math.abs(startY - endY);
    const diffX = Math.abs(startX - endX);

    if (diffX < 5 && diffY < 5) return undefined;

    if (diffY > diffX) {
      //moves in vertical
      if (endY < startY) {
        return Direction.UP;
      } else {
        return Direction.DOWN;
      }
    } else {
      //moves horizontal
      if (endX < startX) {
        return Direction.LEFT;
      } else {
        return Direction.RIGHT;
      }
    }
  };

  const isGameOver = (initialSet?: GameState): boolean => {
    const set = initialSet || gameState;

    if (Object.keys(set).some((cell) => !set[cell as keyof GameState])) {
      return false;
    }

    const rowCheck = ROWS.some((row) =>
      row.some(
        (cell, i) =>
          i < row.length - 1 &&
          set[cell as keyof GameState] === set[row[i + 1] as keyof GameState]
      )
    );

    if (rowCheck) return false;

    return !COLUMNS.some((column) =>
      column.some(
        (cell, i) =>
          i < column.length - 1 &&
          set[cell as keyof GameState] === set[column[i + 1] as keyof GameState]
      )
    );
  };

  const moveBackwards = (
    mapper: Array<Array<keyof GameState>>
  ): Partial<GameState> => {
    const updatedCells: Partial<GameState> = {};

    mapper.forEach((set) => {
      const initialValues: number[] = [];

      set.forEach((cell) => initialValues.push(gameState[cell]));
      const setValues = initialValues.filter((v) => v);

      const length = setValues.length;

      if (length > 1) {
        let skipOne = false;
        for (let i = 0; i < length - 1; i++) {
          if (
            !skipOne &&
            setValues[length - 1 - i] &&
            setValues[length - 1 - i] === setValues[length - 2 - i]
          ) {
            skipOne = true;
            SCORE.current = SCORE.current + setValues[length - 1 - i] * 2;
            setValues[length - 1 - i] = setValues[length - 1 - i] * 2;
            setValues.splice(length - 2 - i, 1);
          } else {
            skipOne = false;
          }
        }
      }

      const arrayChanged = setValues.some(
        (v, i) => initialValues[CANVAS_SIZE - setValues.length + i] !== v
      );
      if (arrayChanged) {
        set.forEach((cell, i) => {
          const emptyCells = CANVAS_SIZE - setValues.length; // can be different than initial rowLength
          updatedCells[cell] = i < emptyCells ? 0 : setValues[i - emptyCells];
        });
      }
    });

    return updatedCells;
  };

  const moveForwards = (
    mapper: Array<Array<keyof GameState>>
  ): Partial<GameState> => {
    const updatedCells: Partial<GameState> = {};

    mapper.forEach((set) => {
      const initialValues: number[] = [];

      set.forEach((cell) => initialValues.push(gameState[cell]));
      const setValues = initialValues.filter((v) => v);

      const rowLength = setValues.length;

      if (rowLength > 1) {
        for (let i = 0; i < rowLength - 1; i++) {
          if (setValues[i] && setValues[i] === setValues[i + 1]) {
            SCORE.current = SCORE.current + setValues[i] * 2;
            setValues[i] = setValues[i] * 2;
            setValues.splice(i + 1, 1);
          }
        }
      }

      const arrayChanged = setValues.some((v, i) => initialValues[i] !== v);

      if (arrayChanged) {
        set.forEach((cell, i) => {
          updatedCells[cell] = setValues[i] || 0;
        });
      }
    });

    return updatedCells;
  };

  const moveLeft = (): Partial<GameState> => {
    return moveForwards(ROWS);
  };

  const moveUp = (): Partial<GameState> => {
    return moveForwards(COLUMNS);
  };

  const moveRight = (): Partial<GameState> => {
    return moveBackwards(ROWS);
  };

  const moveDown = (): Partial<GameState> => {
    return moveBackwards(COLUMNS);
  };

  const handleMove = (direction: Direction): void => {
    let updatedCells: Partial<GameState> = {};
    switch (direction) {
      case Direction.RIGHT:
        updatedCells = moveRight();
        break;
      case Direction.LEFT:
        updatedCells = moveLeft();
        break;
      case Direction.UP:
        updatedCells = moveUp();
        break;
      case Direction.DOWN:
        updatedCells = moveDown();
        break;
      default:
        break;
    }

    if (Object.values(updatedCells).length) {
      setGameState({ ...gameState, ...updatedCells });
      setAddNew(true);
    }
  };

  return {
    gameState,
    gameOn,
    startGame,
    gameOver,
    setGameOver,
    resetGame,
    canvasRef,
    gameLevel,
    score: SCORE.current,
  };
}
