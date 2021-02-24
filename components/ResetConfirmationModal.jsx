/* eslint-disable react/react-in-jsx-scope */
import { withOverlay } from "../hoc/withOverlay"
import Button from "./Button"

export const ResetConfirmationModal = withOverlay(({ onConfirm, onCancel }) => {
  return (
    <div className="bg-white dark:bg-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-4 md:p-6 sm:align-middle w-full max-w-xs" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className='pt-2 pb-4'>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 self-center flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <img src='trouble.png' alt='' />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left self-center ">
            <h3 className="leading-normal text-xl text-gray-900 dark:text-gray-800" id="modal-headline">
              Do you want to end the ongoing game?
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Button onClick={onCancel} label='Cancel' className='mr-4' />
        <Button onClick={onConfirm} label='Ok' />
      </div>
    </div>
  )
})