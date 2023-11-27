import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='title'>
        Intutive Quiz Hub
        <hr />
        </Link>
        </div>
  )
}

export default Header