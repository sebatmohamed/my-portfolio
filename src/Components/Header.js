import Link from "next/link";
import "../../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <a>Sebat Mohamed</a>
        </Link>
      </div>

      <div className="nav">
        <Link href="/about">
          <a className="page">
            <span>About</span>
          </a>
        </Link>

        <Link href="/projects">
          <a className="page">
            <span>Projects</span>
          </a>
        </Link>

        <Link href="/resume">
          <a className="page">
            <span>Resume</span>
          </a>
        </Link>

        <Link href="/contact">
          <a className="page">
            <span>Contact</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
