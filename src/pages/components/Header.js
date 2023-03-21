import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <h1>Together.</h1>
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
  );
}

export default Header;
