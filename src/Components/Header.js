import Link from "next/link";
import "../../css/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      isClosed: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive})
    this.setState({ isClosed: !this.state.isClosed})
  }

  render() {
    return (
      <div className='header'>
        
        <div className='logo'>
          <Link href="/">
            <a>Sebat Mohamed</a>
          </Link>
        </div>

        <div className='nav'>
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

        {this.state.isActive 
          ?  
          <div className='new-nav'>
            <a className="nav-item" href="/projects">Projects</a>
            <a className="nav-item" href="/resume">Resume</a>
            <a className="nav-item" href="/contact">Contact</a>
          </div> 
          :
          null }

        {this.state.isClosed
        ?
        <div className='menu'>
          <GiHamburgerMenu
            style={{ width: "1.5em", height: "1.5em" }}
            onClick={this.handleClick}
          />
        </div>
        :
        <div className="menu">
         <IoMdClose
           style={{ width: "1.5em", height: "1.5em" }}
           onClick={this.handleClick}
         />
        </div> }

      </div>
    );
  }
}

export default Header;