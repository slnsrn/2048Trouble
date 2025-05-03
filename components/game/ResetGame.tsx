import { useState } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { useGameContext } from './GameContext'
import { Level } from '@/lib/trouble'

export function ResetGame() {
  const [isOpen, setIsOpen] = useState(false)
  const { gameOn, startGame, gameLevel, resetGame } = useGameContext()

  const handleReset = (level?: Level) => {
    setIsOpen(false)
    level ? startGame(level) : resetGame()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={!gameOn} variant="secondary">
          Reset Game
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background dark:bg-zinc-700 max-w-xs">
        <DialogHeader className="flex flex-row items-center gap-4">
          <DialogTitle>Do you want to end the ongoing game?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center md:justify-end gap-4">
          <Button onClick={() => setIsOpen(false)} variant="tertiary">
            Cancel
          </Button>
          <Button onClick={() => handleReset(gameLevel)} variant="secondary">
            Restart
          </Button>
          <Button onClick={() => handleReset()} variant="destructive">
            Reset
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
