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

export const NEW_VALUE_POOL = [...Array.from({ length: 85 }, () => 2), ...Array.from({ length: 15 }, () => 4)]

/**
 * Generates tailwind color classes based on the tile number
 * @param {number} value - The number on the tile
 * @returns {string} - Tailwind classes for the tile
 */
export const getTileColorClasses = (value) => {
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
      return `bg-yellow-200 ${textSize} ${textColor}`;  // Darker yellow for 2 to avoid being too bright
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

// Keep the old mapping for reference or in case some parts of the code still use it
export const COLOR_MAPPING = {
  2: 'bg-amber-50 text-2xl text-gray-700 dark:bg-amber-100 dark:text-gray-700',
  4: 'bg-amber-100 text-2xl text-gray-700 dark:bg-amber-200 dark:text-gray-700',
  8: 'bg-amber-200 text-2xl text-gray-700 dark:bg-amber-300 dark:text-gray-700',
  16: 'bg-amber-300 text-2xl text-gray-700 dark:bg-amber-400 dark:text-gray-700',
  32: 'bg-orange-400 text-2xl text-white dark:bg-orange-300 dark:text-gray-700',
  64: 'bg-orange-500 text-2xl text-white dark:bg-orange-400 dark:text-gray-700',
  128: 'bg-orange-600 text-2xl text-white dark:bg-orange-500 dark:text-white',
  256: 'bg-orange-700 text-2xl text-white dark:bg-orange-600 dark:text-white',
  512: 'bg-rose-500 text-2xl text-white dark:bg-rose-400 dark:text-white',
  1024: 'bg-rose-600 text-xl text-white dark:bg-rose-500 dark:text-white',
  2048: 'bg-rose-700 text-xl text-white dark:bg-rose-600 dark:text-white',
  4096: 'bg-teal-500 text-xl text-white dark:bg-teal-400 dark:text-white',
  8192: 'bg-teal-600 text-xl text-white dark:bg-teal-500 dark:text-white',
  16384: 'bg-teal-700 text-xl text-white dark:bg-teal-600 dark:text-white',
};

export const DIRECTION = {
  right: 'right',
  left: 'left',
  up: 'up',
  down: 'down',
}
