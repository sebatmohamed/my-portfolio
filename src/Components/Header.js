import Link from "next/link";
import "../../css/header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <a>Sebat Mohamed</a>
        </Link>
      </div>

      <div className="nav">
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

        <div className="menu">
          <GiHamburgerMenu
            style={{ color: "white", width: "2em", height: "2em" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
