import React, { useState } from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames'

import { CANVAS_SIZE, LETTERS, COLOR_MAPPING } from '../utils/constants'
import { LEVEL } from '../utils/trouble'
import useGameActions from '../hooks/useGameActions'
import Button from '../components/Button'
import { GameOverModal } from '../components/GameOverModal'
import { ResetConfirmationModal } from '../components/ResetConfirmationModal'
import { SelectLevelModal } from '../components/SelectLevelModal'
import SeoContent from '../components/SeoContent';


function HomePage ({ isMobile }) {
  const [showLevelButtons, setShowLevelButtons] = useState(false)
  const [showResetConfirmation, setShowResetConfirmation] = useState(false)
  const { gameState, gameOn, startGame, resetGame, gameOver, canvasRef, score, gameLevel } = useGameActions()

  const handleLevelSelection = (level) => {
    startGame(level)
    setShowLevelButtons(false)
  }

  const handleReset = () => {
    setShowResetConfirmation(false)
    resetGame()
  }

  const renderCanvas = () => {
    return (
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:p-6" ref={canvasRef}>
        <div className='border-warmGray-200 dark:border-gray-600 border-4 self-end' style={{ width: '16rem' }}>
          {Array.from({ length: CANVAS_SIZE }).map((item, i) => (
            <div key={i} className={cx({ 'border-b-4 border-warmGray-200 dark:border-gray-600': i < CANVAS_SIZE - 1 }, 'flex flex-row')}>
              {Array.from({ length: CANVAS_SIZE }).map((cell, j) => {
                const index = LETTERS[i] + (j + 1)
                return (
                  <div
                    className={cx('transition w-16 h-16 flex box-content dark:transition-none', COLOR_MAPPING[gameState[index]], {
                      'border-r-4 border-warmGray-200 dark:border-gray-600': j < CANVAS_SIZE - 1,
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
        <div className='self-center md:self-start'>

          {gameOn && <div className='text-warmGray-700 dark:text-amber-200 text-4xl leading-normal font-bold text-center mb-2 md:mb-4'>{score}</div>}
          {!gameOn &&
            <div className='hidden lg:flex lg:flex-col justify-center mb-4 items-center'>
              <img className='w-24' src='navigation.png' alt='use arrow keys to play' />
              <span className='italic text-xs text-gray-700'>Use arrow keys to play</span>
            </div>
          }

          <div className='flex flex-col flex-end justify-center'>
            <Button label='Start Normal' onClick={() => startGame()} disabled={gameOn} className='mb-4' />

            <div className="relative mb-4">
              <Button label='Start With Trouble' onClick={() => { setShowLevelButtons(true) }} disabled={gameOn} />
              {showLevelButtons && isMobile && <SelectLevelModal onConfirm={handleLevelSelection} />}
              {showLevelButtons && !isMobile &&
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button onClick={() => handleLevelSelection(LEVEL.easy)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Easy</button>
                  <button onClick={() => handleLevelSelection(LEVEL.medium)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Medium</button>
                  <button onClick={() => handleLevelSelection(LEVEL.hard)} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Hard</button>
                </div>}
            </div>
            <Button label='Reset Game' onClick={() => setShowResetConfirmation(true)} disabled={!gameOn} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-6 py-8 md:p-20 bg-warmGray-100 dark:bg-gray-700 w-screen h-full">
      <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-6xl text-warmGray-700 dark:text-amber-300 flex justify-center tracking-widest'> 2048 TR<img className='w-8 h-8 mr-1 md:w-10 md:h-10 lg:h-12 lg:w-12 self-center' src='trouble-dark-i.png' alt='' />UBLE</h1>
      <div className="flex flex-col md:flex-row justify-center">
        {renderCanvas()}
        {renderButtons()}
      </div>
      <SeoContent isMobile />
      {gameOver && <GameOverModal onConfirm={() => startGame(gameLevel)} onCancel={resetGame} />}
      {showResetConfirmation && <ResetConfirmationModal onConfirm={handleReset} onCancel={() => setShowResetConfirmation(false)} />}
    </div >
  )
}
export async function getServerSideProps (context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return {
    props: { isMobile }
  }
}

HomePage.propTypes = {
  isMobile: PropTypes.bool
}


export default HomePage

