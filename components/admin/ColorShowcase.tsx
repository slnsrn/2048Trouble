import React from 'react'
import cx from 'classnames'
import { getTileColorClasses } from '@/lib/constants'

const ColorShowcase = () => {
  // All possible tile values from 2 to 8192
  const tileValues = [
    2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384,
  ]

  return (
    <div className="w-full mt-8 mb-4 p-4 border-2 border-amber-300 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Color Showcase</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {tileValues.map((value) => (
          <div key={value} className="mb-4 text-center">
            <div
              className={cx('w-16 h-16 flex mb-1', getTileColorClasses(value))}
            >
              <span className="font-bold w-full self-center text-center">
                {value}
              </span>
            </div>
            <span className="text-xs">Power: {Math.log2(value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorShowcase
