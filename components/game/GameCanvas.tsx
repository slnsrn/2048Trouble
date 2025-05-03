import { CANVAS_SIZE, getTileColorClasses, LETTERS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useGameContext } from './GameContext'
import { useEffect, useState } from 'react'

export default function GameCanvas() {
  // Set of new tiles that appeared in the last move
  const [newTiles, setNewTiles] = useState<Set<string>>(new Set())
  const { canvasRef, gameState, previousGameState, gameOn } = useGameContext()

  // Track new tiles that appear after each move
  useEffect(() => {
    if (!previousGameState || !gameOn) return

    const newTilePositions = new Set<string>()

    // Find positions that have values in the current state but not in the previous state
    for (let i = 0; i < CANVAS_SIZE; i++) {
      for (let j = 0; j < CANVAS_SIZE; j++) {
        const pos = LETTERS[i] + (j + 1)
        if (
          // @ts-ignore
          gameState[pos] &&
          (!previousGameState[pos as keyof typeof previousGameState] ||
            gameState[pos as keyof typeof gameState] !==
              previousGameState[pos as keyof typeof previousGameState])
        ) {
          // Check if this position didn't exist or had a different value before
          let foundInPrevious = false
          for (let key in previousGameState) {
             // @ts-ignore
            if (previousGameState[key] === gameState[pos]) {
              foundInPrevious = true
              break
            }
          }

          // If we didn't find this value in the previous state, it's new
          if (!foundInPrevious) {
            newTilePositions.add(pos)
          }
        }
      }
    }

    if (newTilePositions.size > 0) {
      setNewTiles(newTilePositions)
      // Clear the new tiles after animation completes
      setTimeout(() => {
        setNewTiles(new Set())
      }, 200)
    }
  }, [gameState, previousGameState, gameOn])

  return (
    <div
      className="self-center flex justify-center items-center"
      ref={canvasRef}
    >
      <div
        className="border-neutral-200 dark:border-stone-600 border-4 self-end relative"
        style={{ width: '16rem' }}
      >
        {/* Render the game grid */}
        {Array.from({ length: CANVAS_SIZE }).map((_, i) => (
          <div
            key={i}
            className={cn(
              {
                'border-b-4 border-neutral-200 dark:border-stone-600':
                  i < CANVAS_SIZE - 1,
              },
              'flex flex-row'
            )}
          >
            {Array.from({ length: CANVAS_SIZE }).map((_, j) => {
              const index = (LETTERS[i] + (j + 1)) as keyof typeof gameState
              const isNewTile = newTiles.has(index as string)

              return (
                <div
                  className={cn(
                    'transition w-16 h-16 flex box-content dark:transition-none',
                    getTileColorClasses(gameState[index]),
                    {
                      'border-r-4 border-neutral-200 dark:border-stone-600':
                        j < CANVAS_SIZE - 1,
                    },
                    gameState[index] ? 'game-tile' : '',
                    isNewTile ? 'game-tile-new' : ''
                  )}
                  key={j}
                  data-position={index}
                  data-value={gameState[index] || ''}
                >
                  <span className="font-bold w-full self-center text-center">
                    {gameState[index] || ''}
                  </span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
