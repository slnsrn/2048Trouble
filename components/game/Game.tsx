'use client'

import { GameOverModal } from './GameOverModal'
import Title from '../Title'
import HowToPlay from './HowToPlay'
import GameControls from '@/components/game/GameControls'
import { GameProvider } from './GameContext'
import GameCanvas from './GameCanvas'
import { GameScore } from './GameScore'

export default function Game(): React.JSX.Element {
  return (
    <div className="px-4 md:px-6 py-8 bg-orange-50 dark:bg-zinc-700 w-screen min-h-screen h-screen flex flex-col">
      <div className="relative justify-between mb-6 items-center">
        <Title title="2048Trouble" />
        <div className="absolute top-3 right-0">
          <HowToPlay />
        </div>
      </div>
      <GameProvider>
        <div className="flex flex-col justify-center flex-grow space-y-6">
          <GameScore />
          <GameCanvas />

          <GameControls />
        </div>

        <GameOverModal />
      </GameProvider>
    </div>
  )
}
