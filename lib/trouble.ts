import { LETTERS, CANVAS_SIZE, GameState } from './constants'

const getRandomNumber = (max: number): number => Math.floor(Math.random() * max)

export enum Level {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

const LEVEL_POOL: Record<Level, number[]> = {
  easy: [
    ...Array.from({ length: 20 }, () => 0),
    ...Array.from({ length: 20 }, () => 2),
    ...Array.from({ length: 20 }, () => 4),
    ...Array.from({ length: 10 }, () => 8),
    ...Array.from({ length: 5 }, () => 16),
    ...Array.from({ length: 5 }, () => 32),
    ...Array.from({ length: 5 }, () => 64),
    ...Array.from({ length: 5 }, () => 128),
    ...Array.from({ length: 5 }, () => 256),
    ...Array.from({ length: 5 }, () => 512),
  ],
  medium: [
    ...Array.from({ length: 10 }, () => 0),
    ...Array.from({ length: 10 }, () => 2),
    ...Array.from({ length: 10 }, () => 4),
    ...Array.from({ length: 10 }, () => 8),
    ...Array.from({ length: 10 }, () => 16),
    ...Array.from({ length: 10 }, () => 32),
    ...Array.from({ length: 10 }, () => 64),
    ...Array.from({ length: 10 }, () => 128),
    ...Array.from({ length: 10 }, () => 256),
    ...Array.from({ length: 10 }, () => 512),
  ],
  hard: [
    ...Array.from({ length: 5 }, () => 0),
    ...Array.from({ length: 5 }, () => 2),
    ...Array.from({ length: 5 }, () => 4),
    ...Array.from({ length: 5 }, () => 8),
    ...Array.from({ length: 10 }, () => 16),
    ...Array.from({ length: 10 }, () => 32),
    ...Array.from({ length: 15 }, () => 64),
    ...Array.from({ length: 15 }, () => 128),
    ...Array.from({ length: 15 }, () => 256),
    ...Array.from({ length: 12 }, () => 512),
    ...Array.from({ length: 3 }, () => 1024),
  ],
}

export const createGameSet = (level: Level): GameState => {
  const pool = LEVEL_POOL[level]

  return LETTERS.reduce((troubleSet: Partial<GameState>, letter) => {
    for (let i = 0; i < CANVAS_SIZE; i++) {
      const key = `${letter}${i + 1}` as keyof GameState
      troubleSet[key] = pool[getRandomNumber(pool.length - 1)]
    }
    return troubleSet
  }, {}) as GameState
}

export const calculateInitialScore = (set: GameState): number => {
  return Object.values(set).reduce((total, v) => total + v, 0)
}

export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * Math.floor(max))
