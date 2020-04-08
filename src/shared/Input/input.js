import React from 'react'
import PropTypes from 'prop-types'

import './input.css'

export const Input = ({type, placeholder, onChange, className, ...props}) => {
  return <input {...props} type={type} placeholder={placeholder} className={className} onChange={onChange} />
}


Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}