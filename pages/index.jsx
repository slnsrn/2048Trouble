import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { BiUpArrow, BiDownArrow, BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { CANVAS_SIZE, LETTERS, COLOR_MAPPING, COLUMNS, ROWS, NEW_VALUE_POOL, INITIAL_STATE, FILLABLE_CELLS, DIRECTION } from '../utils/constants'
import { getTroubleSet } from '../utils/trouble'

function HomePage () {
  const [cellValues, setCellValues] = useState(INITIAL_STATE)
  const [gameOn, setGameOn] = useState(false)
  const [addNew, setAddNew] = useState(false)
  const canvasRef = useRef(null)

  const getRandomCell = () => {
    const emptyCells = FILLABLE_CELLS.filter(cell => !cellValues[cell])
    const random = Math.random()
    const cell = emptyCells[Math.floor(random * (emptyCells.length - 1))]
    return { [cell]: NEW_VALUE_POOL[Math.floor(random * 99)] }
  }

  useEffect(() => {
    if (addNew) {
      setCellValues({ ...cellValues, ...getRandomCell() })
      setAddNew(false)
    }
  }, [addNew])

  const moveOnKeyPressed = (e) => {
    let direction
    switch (e.keyCode) {
      case 37:
        direction = DIRECTION.left
        break
      case 38:
        direction = DIRECTION.up
        break
      case 39:
        direction = DIRECTION.right
        break
      case 40:
        direction = DIRECTION.down
        break
      default:
        return
    }

    if (direction) {
      handleMove(direction)
    }

  }

  useEffect(() => {
    document.addEventListener('mousedown', function (event) {
      if (event.detail > 1) {
        event.preventDefault();
      }
    }, false);
  })

  useEffect(() => {
    if (document) {
      document.addEventListener('keyup', moveOnKeyPressed)
      return () => document.removeEventListener('keyup', moveOnKeyPressed)
    }
  }, [moveOnKeyPressed])

  const startGame = () => {
    if (gameOn) return

    const cell1 = getRandomCell()
    const cell2 = getRandomCell()

    setCellValues({ ...cellValues, ...cell1, ...cell2 })
    setGameOn(true)
  }

  const startTrouble = () => {
    if (gameOn) return

    setCellValues(getTroubleSet())
    setGameOn(true)
  }

  const resetGame = () => {
    setCellValues(INITIAL_STATE)
    setGameOn(false)
  }

  const setMouseStart = (e) => {
    if (!gameOn) return

    canvasRef.current.position = { startX: e.pageX, startY: e.pageY }
  }

  const moveWithArrows = (direction) => {
    if (!gameOn) return

    handleMove(direction)
  }

  const moveWithMouse = (e) => {
    if (!gameOn) return

    const direction = getMouseDirection(e.pageX, e.pageY)
    handleMove(direction)
  }

  const getMouseDirection = (endX, endY) => {
    const { startX, startY } = canvasRef.current.position
    const diffY = Math.abs(startY - endY)
    const diffX = Math.abs(startX - endY)

    if (diffY > diffX) {
      //moves in vertical
      if (endY < startY) {
        return DIRECTION.up
      } else {
        return DIRECTION.down
      }
    } else {
      //moves horizontal
      if (endX < startX) {
        return DIRECTION.left
      } else {
        return DIRECTION.right
      }
    }
  }

  const moveRight = () => {
    const updatedCells = {}

    ROWS.forEach((row) => {
      const initialValues = []

      row.forEach((cell) => initialValues.push(cellValues[cell]))
      const rowValues = initialValues.filter(v => v)

      const rowLength = rowValues.length

      if (rowLength > 1) {
        let added = false

        for (let i = 0; i < rowLength - 1; i++) {
          if (!added && rowValues[rowLength - 1 - i] === rowValues[rowLength - 2 - i]) {
            added = true
            rowValues[rowLength - 1 - i] = rowValues[rowLength - 1 - i] * 2
            rowValues.splice(rowLength - 2 - i, 1)
          }
        }
      }

      const arrayChanged = rowValues.some((v, i) => initialValues[(CANVAS_SIZE - rowValues.length) + i] !== v)
      if (arrayChanged) {
        row.map((cell, i) => {
          const emptyCells = CANVAS_SIZE - rowValues.length // can be different than initial rowLength
          updatedCells[cell] = i < emptyCells ? 0 : rowValues[i - emptyCells]
        })
      }

    })

    return updatedCells

  }

  const moveLeft = () => {
    const updatedCells = {}

    ROWS.forEach((row) => {
      const initialValues = []

      row.forEach((cell) => initialValues.push(cellValues[cell]))
      const rowValues = initialValues.filter(v => v)

      const rowLength = rowValues.length

      if (rowLength > 1) {
        let added = false

        for (let i = 0; i < rowLength - 1; i++) {
          if (!added && rowValues[i] === rowValues[i + 1]) {
            added = true
            rowValues[i] = rowValues[i] * 2
            rowValues.splice(i + 1, 1)
          }
        }
      }
      const arrayChanged = rowValues.some((v, i) => initialValues[i] !== v)

      if (arrayChanged) { row.map((cell, i) => updatedCells[cell] = rowValues[i] || 0) }

    })

    return updatedCells
  }

  const moveUp = () => {
    const updatedCells = {}

    COLUMNS.forEach((column) => {
      const initialValues = []

      column.forEach((cell) => initialValues.push(cellValues[cell]))
      const columnValues = initialValues.filter(v => v)

      const length = columnValues.length

      if (length > 1) {
        let added = false

        for (let i = 0; i < length - 1; i++) {
          if (!added && columnValues[i] === columnValues[i + 1]) {
            added = true
            columnValues[i] = columnValues[i] * 2
            columnValues.splice(i + 1, 1)
          }
        }
      }

      const arrayChanged = columnValues.some((v, i) => initialValues[i] !== v)

      if (arrayChanged) { column.map((cell, i) => updatedCells[cell] = columnValues[i] || 0) }
    })

    return updatedCells
  }

  const moveDown = () => {
    const updatedCells = {}

    COLUMNS.forEach((column) => {
      const initialValues = []

      column.forEach((cell) => initialValues.push(cellValues[cell]))
      const columnValues = initialValues.filter(v => v)

      const length = columnValues.length


      if (length > 1) {
        let added = false

        for (let i = 0; i < length - 1; i++) {
          if (!added && columnValues[length - 1 - i] === columnValues[length - 2 - i]) {
            added = true
            columnValues[length - 1 - i] = columnValues[length - 1 - i] * 2
            columnValues.splice(length - 2 - i, 1)
          }
        }
      }

      const arrayChanged = columnValues.some((v, i) => initialValues[(CANVAS_SIZE - columnValues.length) + i] !== v)
      if (arrayChanged) {
        column.map((cell, i) => {
          const emptyCells = CANVAS_SIZE - columnValues.length // can be different than initial rowLength
          updatedCells[cell] = i < emptyCells ? 0 : columnValues[i - emptyCells]
        })
      }
    })

    return updatedCells

  }

  const handleMove = (direction) => {
    let updatedCells
    switch (direction) {
      case DIRECTION.right:
        updatedCells = moveRight()
        break
      case DIRECTION.left:
        updatedCells = moveLeft()
        break
      case DIRECTION.up:
        updatedCells = moveUp()
        break
      case DIRECTION.down:
        updatedCells = moveDown()
        break
      default:
        break
    }

    if (Object.values(updatedCells).length) {
      setCellValues({ ...cellValues, ...updatedCells })
      setAddNew(true)
    }
  }

  const renderCanvas = () => {
    return (
      <div
        className="border-warm-200 border-4"
        style={{ width: '16rem' }}
        ref={canvasRef}
      >
        {Array.from({ length: CANVAS_SIZE }).map((item, i) => (
          <div key={i} className={cx({ 'border-b-4 border-warm-200': i < CANVAS_SIZE - 1 }, 'flex flex-row')}>
            {Array.from({ length: CANVAS_SIZE }).map((cell, j) => {
              const index = LETTERS[i] + (j + 1)
              return (
                <div
                  className={cx('w-16 h-16 bg-white flex box-content', COLOR_MAPPING[cellValues[index]], {
                    'border-r-4 border-warm-200': j < CANVAS_SIZE - 1,
                  })}
                  key={j}
                >
                  <span className="font-bold w-full self-center text-center">{cellValues[index] || ''}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  const renderButtons = () => {
    return (
      <div className='p-4 md:px-6 self-end'>
        <div className='flex justify-center'>

          <BiLeftArrow onClick={() => moveWithArrows(DIRECTION.left)} className="text-6xl self-center text-blueGray-600" />

          <div className='flex flex-col'>
            <BiUpArrow onClick={() => moveWithArrows(DIRECTION.up)} className="text-6xl text-blueGray-600" />

            <BiDownArrow onClick={() => moveWithArrows(DIRECTION.down)} className="text-6xl text-blueGray-600" />
          </div>

          <BiRightArrow onClick={() => moveWithArrows(DIRECTION.right)} className="text-6xl self-center text-blueGray-600" />
        </div>
        <div className='flex flex-end justify-center'>
          <button
            onClick={startGame}
            className="inline-flex justify-center mt-4 mr-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGray-600 hover:bg-blueGray-600 outline-none">
            Start
          </button>
          <button
            onClick={startTrouble}
            className="inline-flex justify-center mt-4 mr-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGray-600 hover:bg-blueGray-600 outline-none"
          >
            Trouble
          </button>
          <button
            onClick={resetGame}
            className="inline-flex justify-center mt-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGray-600 hover:bg-blueGray-600 outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 lg:p-20 bg-warm-50 w-full h-screen" onCopy={() => { return false }}>
      <h1 className='text-center font-bold mb-8 text-6xl text-blueGray-700 flex justify-center'> 2048 TR<img className='w-12 h-12 self-center' src='trouble.png' alt='' />UBLE</h1>
      <div className="flex justify-center">
        {renderCanvas()}
        {renderButtons()}
      </div>

    </div >
  )
}

export default HomePage