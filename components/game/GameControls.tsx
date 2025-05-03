import { Button } from '../ui/button'
import { ResetGame } from './ResetGame'
import SelectLevel from './SelectLevel'
import { useGameContext } from './GameContext'

export default function GameControls() {
  const { gameOn, startGame } = useGameContext()

  return (
    <div className="self-center flex justify-center items-center">
      <div className="self-center md:self-start">
        <div className="flex flex-col flex-end justify-center space-y-3">
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
