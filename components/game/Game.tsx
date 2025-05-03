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
    <div className="px-4 md:px-6 py-8 md:p-20 bg-orange-50 dark:bg-zinc-700 w-screen min-h-screen h-screen flex flex-col">
      <div className="relative text-center items-center justify-between mb-6">
        <Title title="2048Trouble" />
        <div className="absolute top-0 right-0">
          <HowToPlay />
        </div>
      </div>
      <GameProvider>
        <GameScore />
        <div className="flex flex-col md:flex-row justify-center flex-grow">
          <GameCanvas />

          <GameControls />
        </div>

        <GameOverModal />
      </GameProvider>
    </div>
  )
}
