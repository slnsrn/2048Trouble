export const CANVAS_SIZE = 4;

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
  | 'd4';

// Define the GameState type as a record of cell keys to their numeric values
export type GameState = {
  [key in CellKey]: number;
};

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
};

export const LETTERS = ['a', 'b', 'c', 'd'];

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
];

export const ROWS: Array<Array<CellKey>> = [
  ['a1', 'a2', 'a3', 'a4'],
  ['b1', 'b2', 'b3', 'b4'],
  ['c1', 'c2', 'c3', 'c4'],
  ['d1', 'd2', 'd3', 'd4'],
];

export const COLUMNS: Array<Array<CellKey>> = [
  ['a1', 'b1', 'c1', 'd1'],
  ['a2', 'b2', 'c2', 'd2'],
  ['a3', 'b3', 'c3', 'd3'],
  ['a4', 'b4', 'c4', 'd4'],
];

export const NEW_VALUE_POOL = [
  ...Array.from({ length: 85 }, () => 2),
  ...Array.from({ length: 15 }, () => 4),
];

/**
 * Generates tailwind color classes based on the tile number
 * @param {number} value - The number on the tile
 * @returns {string} - Tailwind classes for the tile
 */
export const getTileColorClasses = (value: number) => {
  if (!value) return '';

  // Calculate the power of 2 (log base 2) to determine color intensity
  const power = Math.log2(value);

  // Text size decreases as the number gets larger
  const textSize = power > 6 ? 'text-xl' : 'text-2xl';

  // Text color changes based on background brightness
  const textColor = power <= 5 ? 'text-gray-700' : 'text-white';

  // Use a switch statement to assign colors from yellow -> amber -> orange -> red
  // with better differentiation between high values
  switch (power) {
    case 1: // 2
      return `bg-yellow-200 ${textSize} ${textColor}`; // Darker yellow for 2 to avoid being too bright
    case 2: // 4
      return `bg-yellow-300 ${textSize} ${textColor}`;
    case 3: // 8
      return `bg-yellow-400 ${textSize} ${textColor}`;
    case 4: // 16
      return `bg-yellow-500 ${textSize} ${textColor}`;
    case 5: // 32
      return `bg-amber-400 ${textSize} ${textColor}`;
    case 6: // 64
      return `bg-amber-500 ${textSize} ${textColor}`;
    case 7: // 128
      return `bg-amber-600 ${textSize} ${textColor}`;
    case 8: // 256
      return `bg-orange-500 ${textSize} ${textColor}`;
    case 9: // 512
      return `bg-orange-600 ${textSize} ${textColor}`;
    case 10: // 1024
      return `bg-orange-700 ${textSize} ${textColor}`;
    case 11: // 2048
      return `bg-red-600 ${textSize} ${textColor}`;
    case 12: // 4096
      return `bg-red-700 ${textSize} ${textColor}`;
    case 13: // 8192
      return `bg-red-800 ${textSize} ${textColor}`;
    default: // 16384+
      return `bg-red-800 ${textSize} ${textColor}`;
  }
};

export enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down',
}
