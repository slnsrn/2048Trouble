/* eslint-disable react/display-name */
// eslint-disable-next-line react/prop-types
import React from 'react'

export const withOverlay = Component => ({ ...props }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto transition-opacity duration-500 flex justify-center">
      <div className="flex justify-center self-center text-center">

        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <Component {...props} />

      </div>
    </div>
  )

}
