import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Plane from '../../styles/paperplane.svg'

function Header() {
  return (
    <header>
      <h1>Together.</h1>
      <Image
        className="header__plane"
        src={Plane}
        alt="Picture of the author"
        width={150}
        height={100}
      />
      <ul>
        <Link href="#" replace>
          Home
        </Link>
        <Link href="#get-started" replace>
          Get Started
        </Link>
        <Link href="#contact" replace>
          Contact
        </Link>
        <Link href="login">Login</Link>
      </ul>
    </header>
  )
}

export default Header
