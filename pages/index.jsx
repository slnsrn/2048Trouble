import React, { useRef, useState } from 'react'
import cx from 'classnames'
import { BiUpArrow, BiDownArrow, BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { CANVAS_SIZE, LETTERS, COLOR_MAPPING, DIRECTION } from '../utils/constants'
import { LEVEL } from '../utils/trouble'
import useGameActions from '../hooks/useGameActions'
import Button from '../components/Button'
import { GameOverModal } from '../components/GameOverModal'


function HomePage () {
  const [showLevelButtons, setShowLevelButtons] = useState(false)
  const canvasRef = useRef(null)
  const { gameState, moveWithArrows, gameOn, startGame, startTrouble, resetGame, gameOver } = useGameActions()

  const handleLevelSelection = (level) => {
    startTrouble(level)
    setShowLevelButtons(false)
  }

  const renderCanvas = () => {
    return (
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:p-6">
        <div className='border-warm-200 border-4' ref={canvasRef} style={{ width: '16rem' }}>
          {Array.from({ length: CANVAS_SIZE }).map((item, i) => (
            <div key={i} className={cx({ 'border-b-4 border-warm-200': i < CANVAS_SIZE - 1 }, 'flex flex-row')}>
              {Array.from({ length: CANVAS_SIZE }).map((cell, j) => {
                const index = LETTERS[i] + (j + 1)
                return (
                  <div
                    className={cx('w-16 h-16 bg-white flex box-content', COLOR_MAPPING[gameState[index]], {
                      'border-r-4 border-warm-200': j < CANVAS_SIZE - 1,
                    })}
                    key={j}
                  >
                    <span className="font-bold w-full self-center text-center">{gameState[index] || ''}</span>
                  </div>
                )
              })}
            </div>
          ))}</div>
      </div>
    )
  }

  const renderButtons = () => {
    return (
      <div className=" w-full md:w-1/2 flex flex-col justify-center md:justify-end p-4 md:p-6">
        <div className='self-center md:self-start pb-4'>
          <div className='flex justify-center'>
            <BiLeftArrow onClick={() => moveWithArrows(DIRECTION.left)} className="text-6xl self-center text-blueGray-600" />

            <div className='flex flex-col'>
              <BiUpArrow onClick={() => moveWithArrows(DIRECTION.up)} className="text-6xl text-blueGray-600" />

              <BiDownArrow onClick={() => moveWithArrows(DIRECTION.down)} className="text-6xl text-blueGray-600" />
            </div>

            <BiRightArrow onClick={() => moveWithArrows(DIRECTION.right)} className="text-6xl self-center text-blueGray-600" />
          </div>

          <div className='flex flex-end justify-center'>
            <Button label='Start' onClick={startGame} disabled={gameOn} />

            <div className="relative mx-4">
              <Button label='Trouble' onClick={() => { setShowLevelButtons(true) }} disabled={gameOn} />

              {showLevelButtons &&
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button onClick={() => handleLevelSelection(LEVEL.easy)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Easy</button>
                  <button onClick={() => handleLevelSelection(LEVEL.medium)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Medium</button>
                  <button onClick={() => handleLevelSelection(LEVEL.hard)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Hard</button>
                </div>}
            </div>
            <Button label='Reset' onClick={resetGame} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-6 py-12 lg:p-20 bg-warm-50 w-full h-screen" onCopy={() => { return false }}>
      <h1 className='text-center font-bold mb-8 text-2xl md:text-4xl lg:text-6xl text-blueGray-700 flex justify-center tracking-widest'> 2048 TR<img className='w-8 h-8 md:w-10 md:h-10 lg:h-12 lg:w-12 self-center' src='trouble.png' alt='' />UBLE</h1>
      <div className="flex flex-col md:flex-row justify-center">
        {renderCanvas()}
        {renderButtons()}
      </div>
      {gameOver && <GameOverModal onConfirm={startGame} onCancel={resetGame} />}
    </div >
  )
}

export default HomePage
