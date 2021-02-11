import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames'


export default function Button ({ onClick, disabled = false, label, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cx({ 'cursor-not-allowed bg-blueGray-400': disabled, 'bg-blueGray-600 hover:bg-blueGray-600': !disabled }, className,
        "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-bold rounded-md text-white outline-none")}>
      {label}
    </button>)
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
}