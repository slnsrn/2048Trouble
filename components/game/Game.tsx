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
    <div className="p-4 md:p-6 bg-background dark:bg-zinc-700 w-screen min-h-screen h-screen flex flex-col">
      <div className="relative justify-between mt-6 md:mt-0 items-center">
        <Title title="2048Trouble" />
        <div className="absolute top-0 md:top-3 right-0">
          <HowToPlay />
        </div>
      </div>
      <GameProvider>
        <div className="flex flex-col mt-14 md:mt-0 md:justify-center flex-grow space-y-3 md:space-y-6">
          <GameScore />
          <GameCanvas />

          <GameControls />
        </div>

        <GameOverModal />
      </GameProvider>
    </div>
  )
}
