import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Header