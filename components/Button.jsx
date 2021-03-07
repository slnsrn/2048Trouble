import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames'


export default function Button ({ onClick, disabled = false, label, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cx({
        'cursor-not-allowed bg-amber-200  text-gray-500 ': disabled,
        'bg-amber-300 hover:bg-amber-400 text-blueGray-700': !disabled
      }, className,
        "inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-base font-bold rounded-md outline-none")}>
      {label}
    </button>)
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
}