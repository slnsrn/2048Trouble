import { LETTERS, CANVAS_SIZE } from './constants'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

export const LEVEL = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
}

const createDataArray = (level) => {
  switch (level) {
    case 'medium':
      return [
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
      ]
    case 'hard':
      return [
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
      ]
    default:
      return [
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
      ]
  }
}

export const createTroubleSet = (level) => {
  const pool = createDataArray(level)

  return LETTERS.reduce((troubleSet, letter) => {
    for (let i = 0; i < CANVAS_SIZE; i++) {
      troubleSet[`${letter}${i + 1}`] = pool[getRandomNumber(pool.length - 1)]
    }
    return troubleSet
  }, {})
}
