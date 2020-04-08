import React from 'react'
import PropTypes from 'prop-types'

import './buttons.css'

export const Button = ({name, onClick, className }) => {
  return <button onClick={onClick} className={className}>{name}</button>
}



Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}