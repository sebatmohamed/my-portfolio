import "../../css/home.css";
import BackgroundImage from "./BackgroundImage";
import Typewriter from "typewriter-effect";
import{ IoIosArrowDropdown } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

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
    event.preventDefault;
    this.state.ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  render() {
    const arrow = {
      color: "white",
      width: "3em",
      height: "3em",
    };

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
            <IoIosArrowDropdown
              style={arrow}
              onClick={this.handleClick}
              className="arrow"
            />
          </div>
        </div>

        <div className="about">
          <div className="left" ref={this.state.ref}>

            <form className="form">
              <h1>Welcome! My Name is Sebat Mohamed 🙂</h1>
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

            <div className="sub">
              <h2>Education:</h2>
              <img
                src="/redLogo.png"
                alt="RED Academy logo"
                className="redlogo"
              />
              <p>Diploma, Web Development Dec 2019</p>
              <img
                src="/macLogo.png"
                alt="McMaster University logo"
                className="maclogo"
              />
              <p>McMaster University BSc Jun 2018</p>
            </div>
          </div>

          <div className="right">
            <img className="my-pic" src="/peace.jpeg" />
          </div>
        </div>

        <div className="skills">
          <h1>Technical Skills</h1>

          <main className="languages">
            <div className="box">
              <FaHtml5
                style={{ width: "4em", height: "4em", color: "#f06529" }}
              />
              <p>HTML expert</p>
            </div>

            <div className="box">
              <FaCss3Alt
                style={{
                  width: "3em",
                  height: "3em",
                  marginRight: "24px",
                  color: "#2965f1"
                }}
              />
              <FaSass
                style={{ width: "4em", height: "4em", color: "#cc6699" }}
              />
              <p>CSS and Sass expert</p>
            </div>

            <div className="box">
              <FaJsSquare
                style={{ width: "4em", height: "4em", color: "#f0db4f" }}
              />
              <p>JavaScript intermediate</p>
            </div>

            <div className="box">
              <FaPhp
                style={{
                  width: "3em",
                  height: "3em",
                  marginRight: "24px",
                  color: "#8993be"
                }}
              />
              <FaWordpress
                style={{ width: "4em", height: "4em", color: "#00749C" }}
              />
              <p>PHP and Wordpress magician</p>
            </div>
          </main>
        </div>

        <div className="technologies-container">
          <h1>Technologies</h1>

          <main className="technologies">
            <div className="box">
              <FaReact
                style={{ width: "4em", height: "4em", color: "#61dbfb" }}
              />
              <p>React intermediate</p>
              <p>A modern JavaScript library for building user interfaces.</p>
            </div>
            <div className="box">
              <FaGulp
                style={{ width: "4em", height: "4em", color: "#DB4446" }}
              />
              <p>Gulp master</p>
              <p>Streamlining efficient builds for client side applications.</p>
            </div>
            <div className="box">
              <FaGitAlt
                style={{ width: "4em", height: "4em", color: "#3E2C00" }}
              />
              <p>Git intermediate</p>
              <p>
                Efficiently tracking changes in source code during development.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
