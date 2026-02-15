import { useGameContext } from './GameContext'

export function GameScore() {
  const { score } = useGameContext()

  return (
    <div className="relative flex items-center justify-center">
      <div className="text-secondary dark:text-amber-200  text-3xl md:text-6xl leading-normal font-bold text-center">
        <div>{score || null}</div>
      </div>
    </div>
  )
}
