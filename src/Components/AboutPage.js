import "../../css/about.css";
import Typewriter from "typewriter-effect";
import BackgroundImage from "./BackgroundImage";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      yourName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const svg = {
      width: "3em",
      height: "3em"
    };

    const svg2 = {
      width: "3em",
      height: "3em",
      marginRight: "24px"
    };

    return (
      <div className="info">
        <BackgroundImage />

        <div className="about-container">
          <div className="left">
            <div className="headline">
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
              <div className="sub">
                <p>I'm passionate about Web Development</p>
                <p>I love making an impact</p>
              </div>
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
            <img className="my-pic" src=""/>
          </div>
        </div>

        <div className="skills-container">
          <h1>Technical Skills</h1>

          <main className="skills">
            <div>
              <FaHtml5 style={svg} />
              <p>HTML expert</p>
            </div>

            <div>
              <FaCss3Alt style={svg2} />
              <FaSass style={svg} />
              <p>CSS and Sass expert</p>
            </div>

            <div>
              <FaJsSquare style={svg} />
              <p>JavaScript intermediate</p>
            </div>

            <div>
              <FaPhp style={svg2} />
              <FaWordpress style={svg} />
              <p>PHP and Wordpress magician</p>
            </div>
          </main>
        </div>

        <div className="technologies-container">
          <h1>Technologies</h1>

          <main className="technologies">
            <div>
              <FaReact style={svg} />
              <p>React intermediate</p>
            </div>
            <div>
              <FaGulp style={svg} />
              <p>Gulp master</p>
            </div>
            <div>
              <FaGitAlt style={svg} />
              <p>Git intermediate</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AboutPage;
