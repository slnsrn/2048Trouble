import { useEffect, useState } from 'react'
import { CANVAS_SIZE, COLUMNS, ROWS, NEW_VALUE_POOL, INITIAL_STATE, FILLABLE_CELLS, DIRECTION } from '../utils/constants'
import { createTroubleSet, } from '../utils/trouble'

export default function useGameActions () {
  const [gameState, setGameState] = useState(INITIAL_STATE)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [addNew, setAddNew] = useState(false)

  useEffect(() => {
    if (addNew) {
      setGameState({ ...gameState, ...getRandomCell() })
      setAddNew(false)
    }
    
    if (isGameOver()) {
      setTimeout(() => { setGameOver(true) }, 500)
    }

  }, [addNew])

  const getRandomCell = () => {
    const emptyCells = FILLABLE_CELLS.filter(cell => !gameState[cell])
    const random = Math.random()
    const cell = emptyCells[Math.floor(random * (emptyCells.length - 1))]
    return { [cell]: NEW_VALUE_POOL[Math.floor(random * 99)] }
  }

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
    if (document) {
      document.addEventListener('keyup', moveOnKeyPressed)
      return () => document.removeEventListener('keyup', moveOnKeyPressed)
    }
  }, [moveOnKeyPressed])

  const startGame = () => {
    if (gameOn) return

    resetGame()

    const cell1 = getRandomCell()
    const cell2 = getRandomCell()

    setGameState({ ...gameState, ...cell1, ...cell2 })
    setGameOn(true)
  }

  const startTrouble = (level) => {
    if (gameOn) return

    setGameState(createTroubleSet(level))
    setGameOn(true)
  }

  const resetGame = () => {
    setGameState(INITIAL_STATE)
    setGameOn(false)
    setGameOver(false)
  }

  // const setMouseStart = (e) => {
  //   if (!gameOn) return

  //   canvasRef.current.position = { startX: e.pageX, startY: e.pageY }
  // }

  const moveWithArrows = (direction) => {
    if (!gameOn) return

    handleMove(direction)
  }

  // const moveWithMouse = (e) => {
  //   if (!gameOn) return

  //   const direction = getMouseDirection(e.pageX, e.pageY)
  //   handleMove(direction)
  // }

  const isGameOver = () => {
    if (Object.keys(gameState).some(cell => !gameState[cell])) {
      return false
    }

    const rowCheck = ROWS.some((row) =>
      row.some((cell, i) => gameState[cell] === gameState[row[i + 1]])
    )

    if (rowCheck) return false

    return !COLUMNS.some((column) => column.some((cell, i) => gameState[cell] === gameState[column[i + 1]]))
  }

  // const getMouseDirection = (endX, endY) => {
  //   const { startX, startY } = canvasRef.current.position
  //   const diffY = Math.abs(startY - endY)
  //   const diffX = Math.abs(startX - endY)

  //   if (diffY > diffX) {
  //     //moves in vertical
  //     if (endY < startY) {
  //       return DIRECTION.up
  //     } else {
  //       return DIRECTION.down
  //     }
  //   } else {
  //     //moves horizontal
  //     if (endX < startX) {
  //       return DIRECTION.left
  //     } else {
  //       return DIRECTION.right
  //     }
  //   }
  // }

  const moveRight = () => {
    const updatedCells = {}

    ROWS.forEach((row) => {
      const initialValues = []

      row.forEach((cell) => initialValues.push(gameState[cell]))
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

      row.forEach((cell) => initialValues.push(gameState[cell]))
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

      column.forEach((cell) => initialValues.push(gameState[cell]))
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

      column.forEach((cell) => initialValues.push(gameState[cell]))
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
      setGameState({ ...gameState, ...updatedCells })
      setAddNew(true)
    }
  }

  return { gameState, moveWithArrows, gameOn, startGame, startTrouble, gameOver, setGameOver, resetGame }

}