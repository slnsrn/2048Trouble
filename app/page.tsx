'use client';

import { useState, useEffect, JSX } from 'react';
import cx from 'classnames';

import { CANVAS_SIZE, LETTERS, getTileColorClasses } from '../utils/constants';
import { Level } from '../utils/trouble';
import useGameActions from '../hooks/useGameActions';
import Button from '../components/Button';
import { GameOverModal } from '../components/GameOverModal';
import { ResetConfirmationModal } from '../components/ResetConfirmationModal';
import { SelectLevelModal } from '../components/SelectLevelModal';
import SeoContent from '../components/SeoContent';
import Title from '../components/Title';

export default function HomePage(): React.JSX.Element {
  // Client component needs its own isMobile detection
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Set isMobile on component mount
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    );
  }, []);

  const [showLevelButtons, setShowLevelButtons] = useState<boolean>(false);
  const [showResetConfirmation, setShowResetConfirmation] =
    useState<boolean>(false);
  const {
    gameState,
    gameOn,
    startGame,
    resetGame,
    gameOver,
    canvasRef,
    score,
    gameLevel,
  } = useGameActions();

  const handleLevelSelection = (level: Level): void => {
    startGame(level);
    setShowLevelButtons(false);
  };

  const handleReset = (): void => {
    setShowResetConfirmation(false);
    resetGame();
  };

  const renderCanvas = (): JSX.Element => {
    return (
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:p-6"
        ref={canvasRef}
      >
        <div
          className="border-neutral-200 dark:border-stone-600 border-4 self-end"
          style={{ width: '16rem' }}
        >
          {Array.from({ length: CANVAS_SIZE }).map((_, i) => (
            <div
              key={i}
              className={cx(
                {
                  'border-b-4 border-neutral-200 dark:border-stone-600':
                    i < CANVAS_SIZE - 1,
                },
                'flex flex-row'
              )}
            >
              {Array.from({ length: CANVAS_SIZE }).map((_, j) => {
                const index = (LETTERS[i] + (j + 1)) as 'a1';
                return (
                  <div
                    className={cx(
                      'transition w-16 h-16 flex box-content dark:transition-none',
                      getTileColorClasses(gameState[index]),
                      {
                        'border-r-4 border-neutral-200 dark:border-stone-600':
                          j < CANVAS_SIZE - 1,
                      }
                    )}
                    key={j}
                  >
                    <span className="font-bold w-full self-center text-center">
                      {gameState[index] || ''}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end p-4 md:p-6">
        <div className="self-center md:self-start">
          {gameOn && (
            <div className="text-gray-700 dark:text-amber-200 text-4xl leading-normal font-bold text-center mb-2 md:mb-4">
              {score}
            </div>
          )}
          {!gameOn && (
            <div className="hidden lg:flex lg:flex-col justify-center mb-4 items-center">
              <img
                className="w-24"
                src="navigation.png"
                alt="use arrow keys to play"
              />
              <span className="italic text-xs text-gray-700">
                Use arrow keys to play
              </span>
            </div>
          )}

          <div className="flex flex-col flex-end justify-center">
            <Button
              label="Start Normal"
              onClick={() => startGame()}
              disabled={gameOn}
              className="mb-4"
            />

            <div className="relative mb-4">
              <Button
                label="Start With Trouble"
                onClick={() => {
                  setShowLevelButtons(true);
                }}
                disabled={gameOn}
              />
                <SelectLevelModal open={showLevelButtons && isMobile} onOpenChange={setShowLevelButtons} onConfirm={handleLevelSelection} />
              {showLevelButtons && !isMobile && (
                <div
                  className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    onClick={() => handleLevelSelection(Level.EASY)}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
                    role="menuitem"
                  >
                    Easy
                  </button>
                  <button
                    onClick={() => handleLevelSelection(Level.MEDIUM)}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
                    role="menuitem"
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => handleLevelSelection(Level.HARD)}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
                    role="menuitem"
                  >
                    Hard
                  </button>
                </div>
              )}
            </div>
            <Button
              label="Reset Game"
              onClick={() => setShowResetConfirmation(true)}
              disabled={!gameOn}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-6 py-8 md:p-20 bg-gray-100 dark:bg-gray-700 w-screen min-h-screen h-screen flex flex-col">
      <Title title="2048Trouble" />
      <div className="flex flex-col md:flex-row justify-center flex-grow">
        {renderCanvas()}
        {renderButtons()}
      </div>


      <SeoContent isMobile={isMobile} />
      <GameOverModal
        open={gameOver}
        onOpenChange={resetGame}
        onConfirm={() => startGame(gameLevel)}
        onCancel={resetGame}
      />
      <ResetConfirmationModal
        open={showResetConfirmation}
        onOpenChange={setShowResetConfirmation}
        onConfirm={handleReset}
        onCancel={() => setShowResetConfirmation(false)}
      />
    </div>
  );
}
