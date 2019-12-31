import "../../css/home.css";
import BackgroundImage from "./BackgroundImage";
import Typewriter from "typewriter-effect";
import { FaAngleDown } from "react-icons/fa";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      yourName: "",
      ref: React.createRef()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault
    this.state.ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  })
}

  render() {
    const svg = {
      width: "4em",
      height: "4em"
    };

    const svg2 = {
      width: "3em",
      height: "3em",
      marginRight: "24px"
    };

    const arrow = {
      color: 'white', 
      width: '3em', 
      height: '3em',
      border: '2px solid',
      borderRadius: '50%',
    }

    return (
      <div className="container">
        <BackgroundImage />

        <div className="main">
          <div className="major">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Lifelong Learner",
                  "React Lover",
                  "HTML & CSS expert",
                  "Javascript Enthusiast",
                  "Wordpress Critic",
                  "Front-end Developer"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>

          <div className="minor">
            <p>Check out some of my incredible work and let's connect!</p>
          </div>

          <div>
            <FaAngleDown style={arrow} onClick={this.handleClick} className="arrow"/>
          </div>
        </div>

        <div className="about">
          <div className="left" ref={this.state.ref}>
            <div className="sub">
              <p>Filter text</p>
              <p>Some more filter text</p>
            </div>

            <form className="form">
              <label className="form-label">
                Tell me what your name is. Hello,{" "}
                <span>{this.state.yourName}</span>
              </label>

              <input
                type="text"
                name="yourName"
                placeholder="Type in your name"
                value={this.state.yourName}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </form>
          </div>

          <div className="right">
            <img className="my-pic" src="/peace.jpeg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
