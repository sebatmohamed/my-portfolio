import "../../css/about.css";
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
      width: "4em",
      height: "4em",
    }

    const svg2 = {
      width: "3em",
      height: "3em",
      marginRight: "24px",
    }

    return (
      <div className="info">

        <div className="about-container">

          <div className="left">
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
            <img className="my-pic" src="/peace.jpeg"/>
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
          <svg viewBox="0 0 1200 53" style={{color: 'white', height: 'auto', position: 'absolute', top: '0'}}>
          <path fill="currentColor" d="M1196.008 53H1200V0H0v44.816-8.184C159.341 14.63 311.343 2.484 456.007.196 600.122-2.084 846.789 15.518 1196.008 53z"></path>
          </svg>
          {/* <h1>Technologies</h1> */}
          <main className="technologies">
            <div className="box">
              <FaReact style={svg} />
              <p>React intermediate</p>
              <p>A modern JavaScript library for building user interfaces.</p>
            </div>
            <div className="box">
              <FaGulp style={svg} />
              <p>Gulp master</p>
              <p>Streamlining efficient builds for client side applications.</p>
            </div>
            <div className="box">
              <FaGitAlt style={svg} />
              <p>Git intermediate</p>
              <p>Efficiently tracking changes in source code during development.</p>
            </div>
          </main>

          <svg viewBox="0 0 1200 46" style={{color: 'white', height: 'auto', position: 'absolute', bottom: '0'}}>
          <path fill="currentColor" fill-rule="evenodd" d="M0-7h1200v53H0V-7zm0 30.113V-7h1200v43.495c-37.762 7.58-155.36 7.58-352.791 0C721.412 31.665 480.68.297 248.535.355 197.087.368 114.242 7.955 0 23.113z"></path>          
          </svg>
        </div>
      </div>
    );
  }
}

export default AboutPage;
