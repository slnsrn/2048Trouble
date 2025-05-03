import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameContext } from './GameContext'

export function GameScore() {
  const { score } = useGameContext()
  const [prevScore, setPrevScore] = useState(score)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scoreChange, setScoreChange] = useState(0)

  useEffect(() => {
    const increase = score - prevScore
    if (increase > 0) {
      setScoreChange(increase)
      setPrevScore(score)
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [score])

  return (
    <div className="relative h-16 flex items-center justify-center">
      <div className="text-indigo-400 dark:text-amber-200 text-6xl leading-normal font-bold text-center">
        <AnimatePresence>
          <motion.div
            key={score}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: 1,
              scale: isAnimating ? [1, 1.2, 1] : 1,
              color: isAnimating
                ? ['#818cf8', '#f59e0b', '#818cf8']
                : undefined,
            }}
            transition={{ duration: 0.5 }}
          >
            {score || null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Score change indicator */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="absolute -top-10 text-amber-500 font-bold md:text-2xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            +{scoreChange}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
