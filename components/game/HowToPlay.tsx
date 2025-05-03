'use client'

import React, { useEffect, useState } from 'react'
import { Lightbulb } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'

export default function HowToPlay() {
  const [showInstructions, setShowInstructions] = useState<boolean>(false)

  useEffect(() => {
    // Check if user has visited before
    const storedTimestamp = localStorage.getItem('firstVisit')

    if (!storedTimestamp) {
      // First time visitor - show HowToPlay
      setShowInstructions(true)
      // Store current timestamp in local storage
      const currentTimestamp = Date.now().toString()
      localStorage.setItem('firstVisit', currentTimestamp)
    }
  }, [])

  return (
    <Popover open={showInstructions} onOpenChange={setShowInstructions}>
      <PopoverTrigger asChild>
        <Button aria-label="How to play" variant="ghost">
          <Lightbulb className="text-indigo-500 size-6" size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-white dark:bg-zinc-800 p-4 rounded-md shadow-md w-72">
        <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100">
          How to Play
        </h3>
        <div className="space-y-2 text-zinc-700 dark:text-zinc-300 text-sm">
          <p>
            <strong>Goal:</strong> Combine tiles to create the number 2048!
          </p>
          <p>
            <strong>Controls:</strong> Use arrow keys (↑ ↓ ← →) to move all
            tiles. On mobile, swipe in any direction.
          </p>
          <p>
            <strong>Merging:</strong> When two tiles with the same number touch,
            they merge into one with the sum of their values.
          </p>
          <p>
            <strong>Trouble Mode:</strong> Adds obstacles! Choose difficulty
            level to change the number of obstacle tiles.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
