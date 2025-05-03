import { Button } from '../ui/button'
import { ResetGame } from './ResetGame'
import SelectLevel from './SelectLevel'
import { useGameContext } from './GameContext'

export default function GameControls() {
  const { gameOn, startGame } = useGameContext()

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end p-4 md:p-6">
      <div className="self-center md:self-start">
        <div className="flex flex-col flex-end justify-center space-y-4">
          <Button onClick={() => startGame()} disabled={gameOn}>
            Normal
          </Button>

          <SelectLevel />

          {/* mobile level selection */}
          {/* <SelectLevelModalMobile
                open={showLevelButtons && isMobile}
                onOpenChange={setShowLevelButtons}
                onConfirm={selectLevel}
              /> */}
          <ResetGame />
        </div>
      </div>
    </div>
  )
}
