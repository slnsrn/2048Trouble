/* eslint-disable react/react-in-jsx-scope */
import { withOverlay } from "../hoc/withOverlay"
import Button from "./Button"

export const GameOverModal = withOverlay(({ onConfirm, onCancel }) => {
  return (
    <div className="transition-opacity bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-6 sm:align-middle w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className='transition pt-2 pb-4'>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <img src='trouble.png' alt='' />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left self-center ">
            <h3 className="text-lg leading-6 text-2xl font-medium text-gray-900" id="modal-headline">
              Game is over!
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={onCancel} label='Reset' className='mr-4' />
        <Button onClick={onConfirm} label='Start over' />
      </div>
    </div>
  )
})