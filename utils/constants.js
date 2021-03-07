export const CANVAS_SIZE = 4

export const INITIAL_STATE = {
  a1: 2,
  a2: 4,
  a3: 0,
  a4: 8,
  b1: 16,
  b2: 32,
  b3: 64,
  b4: 128,
  c1: 256,
  c2: 512,
  c3: 1024,
  c4: 2048,
  d1: 4096,
  d2: 8192,
  d3: 0,
  d4: 0,
}

export const LETTERS = ['a', 'b', 'c', 'd']

export const FILLABLE_CELLS = ['a1', 'a2', 'a3', 'a4', 'b1', 'b4', 'c1', 'c4', 'd1', 'd2', 'd3', 'd4']

export const ROWS = [
  ['a1', 'a2', 'a3', 'a4'],
  ['b1', 'b2', 'b3', 'b4'],
  ['c1', 'c2', 'c3', 'c4'],
  ['d1', 'd2', 'd3', 'd4'],
]

export const COLUMNS = [
  ['a1', 'b1', 'c1', 'd1'],
  ['a2', 'b2', 'c2', 'd2'],
  ['a3', 'b3', 'c3', 'd3'],
  ['a4', 'b4', 'c4', 'd4'],
]

export const NEW_VALUE_POOL = [...Array.from({ length: 85 }, () => 2), ...Array.from({ length: 15 }, () => 4)]

export const COLOR_MAPPING = {
  2: 'bg-amber-50 text-2xl text-coolGray-600 dark:bg-yellow-100',
  4: 'bg-amber-100 text-2xl text-coolGray-600 dark:bg-yellow-200',
  8: 'bg-amber-200 text-2xl text-coolGray-600 dark:bg-amber-300',
  16: 'bg-amber-300 text-2xl text-coolGray-600 dark:bg-red-200',
  32: 'bg-orange-400 text-2xl text-white dark:bg-rose-300 dark:text-coolGray-600',
  64: 'bg-orange-500 text-2xl text-white dark:bg-rose-400 dark:text-coolGray-200',
  128: 'bg-orange-600 text-2xl text-white dark:bg-indigo-200 dark:text-coolGray-600',
  256: 'bg-orange-700 text-2xl text-white dark:bg-indigo-300 dark:text-coolGray-600',
  512: 'bg-rose-500 text-2xl text-white dark:bg-indigo-400 dark:text-coolGray-200',
  1024: 'bg-rose-600 text-xl text-white dark:bg-blue-300 dark:text-coolGray-600',
  2048: 'bg-pink-700 text-xl text-white dark:bg-blue-400 dark:text-coolGray-200',
  4096: 'bg-teal-500 text-xl text-white dark:bg-teal-200 dark:text-coolGray-600',
  8192: 'bg-teal-800 text-xl text-white dark:bg-teal-300 dark:text-coolGray-600',
  16384: 'bg-teal-800 text-xl text-white dark:bg-teal-400 dark:text-coolGray-200',
}

export const DIRECTION = {
  right: 'right',
  left: 'left',
  up: 'up',
  down: 'down',
}
