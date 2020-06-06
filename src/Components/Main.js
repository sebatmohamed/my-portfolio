import "../../css/home.css";
import Typewriter from "typewriter-effect";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      ref: React.createRef(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault;
    this.state.ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
        <div className="main">
          <div className="image">
            <img className="my-pic" src="/photo2.jpeg" />
          </div>

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
                  "Front-end Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div>
            <IoIosArrowDropdown
              style={arrow}
              onClick={this.handleClick}
              className="arrow"
            />
          </div>
        </div>

        <div className="about" ref={this.state.ref}>
          <h1>About</h1>
          <h3>
            Hi My name is Sebat and I love developing beautiful, functional web applications. I'm a 
            front-end developer from Toronto, Ontario. Have a design or mock-up you want developed?
            I can bring that to life for you! 
          </h3>

          <div className="about-info">
            <div>
              <h2>Fast</h2>
              <p>I'll make sure nothing slows your site down</p>
            </div>

            <div>
              <h2>Responsive</h2>
              <p>My layouts will work on any device, big or small</p>
            </div>

            <div>
              <h2>Functional</h2>
              <p>Your website will use just what it needs to get things done</p>
            </div>

            <div>
              <h2>Dynamic</h2>
              <p>Websites don't have to be static</p>
            </div>
          </div>
        </div>

        <div className="skills-wrapper">
          <h1>Technical Skills</h1>

          <main className="skills">
            <div className="bar">
              <div className="fill" style={{ width: "90%" }}>
                <div className="tag">
                  <FaHtml5
                    style={{ width: "2em", height: "2em", color: "#f06529" }}
                  />
                </div>
              </div>
              <span>90%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "90%" }}>
                <div className="tag">
                  <FaCss3Alt
                    style={{ width: "2em", height: "2em", color: "#2965f1" }}
                  />
                </div>
              </div>
              <span>90%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "90%" }}>
                <div className="tag">
                  <FaSass
                    style={{ width: "2em", height: "2em", color: "#cc6699" }}
                  />
                </div>
              </div>
              <span>90%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "80%" }}>
                <div className="tag">
                  <FaJsSquare
                    style={{ width: "2em", height: "2em", color: "#f0db4f" }}
                  />
                </div>
              </div>
              <span>80%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "80%" }}>
                <div className="tag" style={{ paddingTop: "4px" }}>
                  jQuery
                </div>
              </div>
              <span>80%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "70%" }}>
                <div className="tag" style={{ paddingTop: "4px" }}>
                  REST API
                </div>
              </div>
              <span>70%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "60%" }}>
                <div className="tag">
                  <FaPhp
                    style={{ width: "2.5em", height: "2em", color: "#8993be" }}
                  />
                </div>
              </div>
              <span>60%</span>
            </div>

            <div className="bar">
              <div className="fill" style={{ width: "35%" }}>
                <div className="tag">
                  <FaPython
                    style={{ width: "2.5em", height: "2em", color: "#306998" }}
                  />
                </div>
              </div>
              <span>35%</span>
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

            <div className="break">
              <div className="box">
                <FaNodeJs
                  style={{ width: "4em", height: "4em", color: "#00749C" }}
                />
                <p>Nodejs novice</p>
                <p>
                  An event-driven JavaScript runtime that executes code outside
                  a web browser.
                </p>
              </div>
              <div className="box">
                <FaWordpress
                  style={{ width: "4em", height: "4em", color: "#00749C" }}
                />
                <p>Wordpress magician</p>
                <p>
                  A content management system with several website templates.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
