import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Level } from '@/lib/trouble'
import { Button } from '../ui/button'
import { useGameContext } from './GameContext'

export default function SelectLevel() {
  const [isOpen, setIsOpen] = useState(false)
  const { startGame } = useGameContext()

  const handleLevelSelect = (level: Level) => {
    setIsOpen(false)
    startGame(level)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button aria-label="Start with Trouble">Trouble</Button>
      </PopoverTrigger>
      <PopoverContent className="bg-orange-50 w-full">
        <div className="flex flex-col gap-2">
          {Object.values(Level).map((level) => (
            <Button
              key={level}
              onClick={() => handleLevelSelect(level)}
              variant="secondary"
              role="menuitem"
            >
              {level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
