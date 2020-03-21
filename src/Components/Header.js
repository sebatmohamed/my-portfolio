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
      isTop: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive})
    this.setState({ isClosed: !this.state.isClosed})
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 550;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

    onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <div className={this.state.isTop ? 'header' : 'header-scroll'}>
        
        <div className={this.state.isTop ? 'logo' : 'logo-scroll'}>
          <Link href="/">
            <a>Sebat Mohamed</a>
          </Link>
        </div>

        <div className={this.state.isTop ? 'nav' : 'nav-scroll'}>
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
          <div className="new-nav">
            <a className="nav-item" href="/projects">Projects</a>
            <a className="nav-item" href="/resume">Resume</a>
            <a className="nav-item" href="/contact">Contact</a>
          </div> 
          :
          null }

        {this.state.isClosed
        ?
        <div className="menu">
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