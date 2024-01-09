import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
          <Link to="#about">About</Link>
          <Link to="#ability">Ability</Link>
          <Link to="#simplicity">Simplicity</Link>
          <Link to="#contact">Contact</Link>
      </nav>
    </header>
  )
}
