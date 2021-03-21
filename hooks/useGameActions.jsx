import { useEffect, useState, useRef } from 'react'
import { CANVAS_SIZE, COLUMNS, ROWS, NEW_VALUE_POOL, INITIAL_STATE, FILLABLE_CELLS, DIRECTION } from '../utils/constants'
import { createGameSet, calculateInitialScore, getRandomInt } from '../utils/trouble'

export default function useGameActions () {
  const [gameState, setGameState] = useState(INITIAL_STATE)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [addNew, setAddNew] = useState(false)
  const [gameLevel, setGameLevel] = useState(undefined)
  const [panning, setPanning] = useState(false)
  const canvasRef = useRef(null)

  const SCORE = useRef(0)

  useEffect(() => {
    if (addNew) {
      const newState = { ...gameState, ...getRandomCell() }
      setGameState(newState)
      setAddNew(false)
    }

    if (isGameOver()) {
      setTimeout(() => {
        setGameOver(true)
        setGameOn(false)
      }, 500)
    }

  }, [addNew])

  const getRandomCell = () => {
    const emptyCells = FILLABLE_CELLS.filter(cell => !gameState[cell])
    const cell = emptyCells[getRandomInt(emptyCells.length)]

    return { [cell]: NEW_VALUE_POOL[getRandomInt(100)] }
  }

  const moveOnKeyPressed = (e) => {
    let direction
    switch (e.keyCode) {
      case 37:
        direction = DIRECTION.left
        break
      case 38:
        direction = DIRECTION.up
        break
      case 39:
        direction = DIRECTION.right
        break
      case 40:
        direction = DIRECTION.down
        break
      default:
        return
    }

    if (direction) {
      handleMove(direction)
    }

  }

  const preventTouchmoveWhenPanning = (e) => {
    if (panning) {
      e.preventDefault();
    }
  };

  const onTouchStart = (e) => {
    if (!gameOn) return

    setPanning(true)
    canvasRef.current.position = { startX: e.changedTouches[0].screenX, startY: e.changedTouches[0].screenY }
  }

  const onTouchEnd = (e) => {
    if (!gameOn) return

    setPanning(false)
    const direction = getTouchDirection(e.changedTouches[0].screenX, e.changedTouches[0].screenY)
    direction && handleMove(direction)
  }

  useEffect(() => {
    document?.addEventListener('keyup', moveOnKeyPressed)
    return () => document?.removeEventListener('keyup', moveOnKeyPressed)
  }, [moveOnKeyPressed])

  useEffect(() => {
    document?.body?.addEventListener('touchmove', preventTouchmoveWhenPanning, {
      passive: false
    });
    return () => document?.body?.removeEventListener('touchmove', preventTouchmoveWhenPanning, {
      passive: false
    });
  }, [preventTouchmoveWhenPanning])

  useEffect(() => {
    if (canvasRef.current === null) return

    if (canvasRef.current) {
      canvasRef.current.addEventListener('touchstart', onTouchStart, false)
      canvasRef.current.addEventListener('touchend', onTouchEnd, false)
    }
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('touchstart', onTouchStart, false)
        canvasRef.current.removeEventListener('touchend', onTouchEnd, false)
      }
    }
  }, [canvasRef, onTouchStart, onTouchEnd])

  const getGameSetWithLevel = (level) => {
    const set = createGameSet(level)
    if (isGameOver(set)) {
      getGameSetWithLevel(level)
    } else {
      return set
    }
  }

  const getDefaultGameSet = () => {
    const cell1 = getRandomCell()
    const cell2 = getRandomCell()
    return { ...cell1, ...cell2 }
  }

  const startGame = (level = undefined) => {
    if (gameOn) return

    resetGame()

    setGameLevel(level)
    const set = level ? getGameSetWithLevel(level) : getDefaultGameSet()

    SCORE.current = calculateInitialScore(set)
    setGameState(set)
    setGameOn(true)
  }

  const resetGame = () => {
    setGameState(INITIAL_STATE)
    setGameOn(false)
    setGameOver(false)
  }

  const getTouchDirection = (endX, endY) => {
    const { startX, startY } = canvasRef.current.position
    const diffY = Math.abs(startY - endY)
    const diffX = Math.abs(startX - endX)

    if (diffX < 5 && diffY < 5) return

    if (diffY > diffX) {
      //moves in vertical
      if (endY < startY) {
        return DIRECTION.up
      } else {
        return DIRECTION.down
      }
    } else {
      //moves horizontal
      if (endX < startX) {
        return DIRECTION.left
      } else {
        return DIRECTION.right
      }
    }
  }

  const isGameOver = (initialSet = undefined) => {
    const set = initialSet || gameState

    if (Object.keys(set).some(cell => !set[cell])) {
      return false
    }

    const rowCheck = ROWS.some((row) =>
      row.some((cell, i) => set[cell] === set[row[i + 1]])
    )

    if (rowCheck) return false

    return !COLUMNS.some((column) => column.some((cell, i) => set[cell] === set[column[i + 1]]))
  }

  const moveBackwards = (mapper) => {
    const updatedCells = {}

    mapper.forEach((set) => {
      const initialValues = []

      set.forEach((cell) => initialValues.push(gameState[cell]))
      const setValues = initialValues.filter(v => v)

      const length = setValues.length

      if (length > 1) {
        let skipOne = false
        for (let i = 0; i < length - 1; i++) {
          if (!skipOne && setValues[length - 1 - i] && setValues[length - 1 - i] === setValues[length - 2 - i]) {
            skipOne = true
            SCORE.current = SCORE.current + (setValues[length - 1 - i] * 2)
            setValues[length - 1 - i] = setValues[length - 1 - i] * 2
            setValues.splice(length - 2 - i, 1)
          } else { skipOne = false }
        }
      }

      const arrayChanged = setValues.some((v, i) => initialValues[(CANVAS_SIZE - setValues.length) + i] !== v)
      if (arrayChanged) {
        set.map((cell, i) => {
          const emptyCells = CANVAS_SIZE - setValues.length // can be different than initial rowLength
          updatedCells[cell] = i < emptyCells ? 0 : setValues[i - emptyCells]
        })
      }
    })

    return updatedCells
  }

  const moveForwards = (mapper) => {
    const updatedCells = {}

    mapper.forEach((set) => {
      const initialValues = []

      set.forEach((cell) => initialValues.push(gameState[cell]))
      const setValues = initialValues.filter(v => v)

      const rowLength = setValues.length

      if (rowLength > 1) {
        for (let i = 0; i < rowLength - 1; i++) {
          if (setValues[i] && setValues[i] === setValues[i + 1]) {
            SCORE.current = SCORE.current + (setValues[i] * 2)
            setValues[i] = setValues[i] * 2
            setValues.splice(i + 1, 1)
          }
        }
      }

      const arrayChanged = setValues.some((v, i) => initialValues[i] !== v)

      if (arrayChanged) { set.map((cell, i) => updatedCells[cell] = setValues[i] || 0) }

    })

    return updatedCells
  }

  const moveLeft = () => {
    return moveForwards(ROWS)
  }

  const moveUp = () => {
    return moveForwards(COLUMNS)
  }

  const moveRight = () => {
    return moveBackwards(ROWS)
  }

  const moveDown = () => {
    return moveBackwards(COLUMNS)
  }

  const handleMove = (direction) => {
    let updatedCells
    switch (direction) {
      case DIRECTION.right:
        updatedCells = moveRight()
        break
      case DIRECTION.left:
        updatedCells = moveLeft()
        break
      case DIRECTION.up:
        updatedCells = moveUp()
        break
      case DIRECTION.down:
        updatedCells = moveDown()
        break
      default:
        break
    }

    if (Object.values(updatedCells).length) {
      setGameState({ ...gameState, ...updatedCells })
      setAddNew(true)
    }
  }

  return { gameState, gameOn, startGame, gameOver, setGameOver, resetGame, canvasRef, gameLevel, score: SCORE.current }

}