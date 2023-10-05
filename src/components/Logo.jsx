import React from 'react'
import { logo } from '../assets'
function Logo() {
  return (
    <div>{<img src={logo} alt='logo' className='w-24'/>}</div>
  )
}

export default Logo