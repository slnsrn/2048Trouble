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

export function ResetGame() {
  const [isOpen, setIsOpen] = useState(false)
  const { gameOn, resetGame } = useGameContext()

  const handleReset = () => {
    setIsOpen(false)
    resetGame()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={!gameOn}>Reset Game</Button>
      </DialogTrigger>
      <DialogContent className="bg-orange-50 dark:bg-zinc-700 max-w-xs">
        <DialogHeader className="flex flex-row items-center gap-4">
          <DialogTitle>Do you want to end the ongoing game?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex justify-center md:justify-end gap-4">
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleReset}>Ok</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
