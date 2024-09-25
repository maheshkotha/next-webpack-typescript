import React from 'react'

interface Button {
  label?: string
}
const Button = ({label="label"}: Button) => {
  return (
    <button>{label}</button>
  )
}

export default Button