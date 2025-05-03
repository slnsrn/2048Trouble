import * as React from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '../ui/dialog'
import { useGameContext } from './GameContext'

export function GameOverModal() {
  const { gameOver, resetGame, startGame, gameLevel } = useGameContext()
  return (
    <Dialog open={gameOver} onOpenChange={resetGame}>
      <DialogContent className="bg-orange-50 dark:bg-zinc-700">
        <DialogHeader className="flex flex-row items-center gap-4">
          <DialogTitle>Game over</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center md:justify-end gap-4 pt-2">
          <Button onClick={resetGame}>Reset</Button>
          <Button onClick={() => startGame(gameLevel)}>Restart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
