import { useGameContext } from './GameContext'

export function GameScore() {
  const { score } = useGameContext()
  return (
    <div className="text-zinc-700 dark:text-amber-200 text-4xl leading-normal font-bold text-center mb-2 md:mb-4">
      {score || null}
    </div>
  )
}
