export const CANVAS_SIZE = 4

// Define the cell keys for the game board
export type CellKey =
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b4'
  | 'c1'
  | 'c2'
  | 'c3'
  | 'c4'
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'

// Define the GameState type as a record of cell keys to their numeric values
export type GameState = {
  [key in CellKey]: number
}

export const INITIAL_STATE: GameState = {
  a1: 0,
  a2: 0,
  a3: 0,
  a4: 0,
  b1: 0,
  b2: 0,
  b3: 0,
  b4: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  d1: 0,
  d2: 0,
  d3: 0,
  d4: 0,
}

export const LETTERS = ['a', 'b', 'c', 'd']

export const FILLABLE_CELLS: CellKey[] = [
  'a1',
  'a2',
  'a3',
  'a4',
  'b1',
  'b4',
  'c1',
  'c4',
  'd1',
  'd2',
  'd3',
  'd4',
]

export const ROWS: Array<Array<CellKey>> = [
  ['a1', 'a2', 'a3', 'a4'],
  ['b1', 'b2', 'b3', 'b4'],
  ['c1', 'c2', 'c3', 'c4'],
  ['d1', 'd2', 'd3', 'd4'],
]

export const COLUMNS: Array<Array<CellKey>> = [
  ['a1', 'b1', 'c1', 'd1'],
  ['a2', 'b2', 'c2', 'd2'],
  ['a3', 'b3', 'c3', 'd3'],
  ['a4', 'b4', 'c4', 'd4'],
]

export const NEW_VALUE_POOL = [
  ...Array.from({ length: 85 }, () => 2),
  ...Array.from({ length: 15 }, () => 4),
]

/**
 * Generates tailwind color classes based on the tile number
 * @param {number} value - The number on the tile
 * @returns {string} - Tailwind classes for the tile
 */
export const getTileColorClasses = (value: number) => {
  if (!value) return ''

  // Calculate the power of 2 (log base 2) to determine color intensity
  const power = Math.log2(value)

  // Text size decreases as the number gets larger
  const textSize = power > 6 ? 'text-xl' : 'text-2xl'

  // Text color changes based on background brightness
  const textColor = power <= 2 ? 'text-tile-text' : 'text-white'

  // Use a switch statement to assign colors from yellow -> amber -> orange -> red
  // with better differentiation between high values
  return `bg-tile${power} ${textSize} ${textColor}`
}

export enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
}
