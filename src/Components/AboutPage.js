import "../../css/about.css";
import Typewriter from "typewriter-effect";
import BackgroundImage from "./BackgroundImage";

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
                <div>I'm passionate about Web Development</div>
                <div>I love making an impact</div>
              </div>
            </div>

            <form className="form">
              <div className="form-label">Tell me what your name is.</div>
              <input
                type="text"
                name="yourName"
                placeholder="Type in your name"
                value={this.state.yourName}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </form>

            <div>
              <span>{this.state.yourName}</span>
            </div>
          </div>

          <div className="right">
            <img src="../../peace.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
