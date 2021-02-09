export const CANVAS_SIZE = 4

export const INITIAL_STATE = {
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

export const NEW_VALUE_POOL = [...Array.from({ length: 92 }, () => 2), ...Array.from({ length: 8 }, () => 4)]

export const COLOR_MAPPING = {
  2: 'bg-amber-50 text-2xl text-coolGray-600',
  4: 'bg-amber-100 text-2xl text-coolGray-600',
  8: 'bg-amber-200 text-2xl text-coolGray-600',
  16: 'bg-amber-300 text-2xl text-coolGray-600',
  32: 'bg-orange-400 text-2xl text-white',
  64: 'bg-orange-500 text-2xl text-white',
  128: 'bg-orange-600 text-2xl text-white',
  256: 'bg-orange-700 text-2xl text-white',
  512: 'bg-rose-500 text-2xl text-white',
  1024: 'bg-rose-600 text-xl text-white',
  2048: 'bg-rose-700 text-xl text-white',
  4096: 'bg-pink-800 text-xl text-white',
  8192: 'bg-teal-500 text-xl text-white',
  16384: 'bg-teal-800 text-xl text-white',
}

export const DIRECTION = {
  right: 'right',
  left: 'left',
  up: 'up',
  down: 'down',
}

