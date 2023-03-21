import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer id="contact">
      <a href="#" className="footer__logo">
        Together.
      </a>
      <p className="footer__email">Together@gmail.com</p>

      <ul className="footer__nav">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#get-started" replace>
            Get Started
          </Link>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Together. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
