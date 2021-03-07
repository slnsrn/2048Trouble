/* eslint-disable react/react-in-jsx-scope */
import { withOverlay } from "../hoc/withOverlay"
import { LEVEL } from "../utils/trouble"

export const SelectLevelModal = withOverlay(({ onConfirm }) => {
  return (
    <div className="bg-warmGray-100 dark:bg-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button onClick={() => onConfirm(LEVEL.easy)} className="w-full p-4  text-warmGray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Easy</button>
        <button onClick={() => onConfirm(LEVEL.medium)} className="w-full p-4 text-warmGray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Medium</button>
        <button onClick={() => onConfirm(LEVEL.hard)} className="w-full p-4  text-warmGray-700 hover:bg-gray-100 hover:text-gray-900 font-bold" role="menuitem">Hard</button>
      </div>
    </div>
  )
})