import Link from "next/link";

import "../../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="http://localhost:3000">Sebat Mohamed</a>
      </div>

      <div className="nav">
        <Link href="/about">
          <a>About</a>
        </Link>

        <div className="dropdown">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <div className="dropdown-content">
            <a href="/javascript">JavaScript</a>
            <a href="/css">CSS</a>
            <a href="/php">PHP</a>
            <a href="/react">React</a>
          </div>
        </div>

        <Link href="/resume">
          <a>Resume</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
