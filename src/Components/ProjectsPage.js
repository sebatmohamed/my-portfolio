import "../../css/projects.css";
import Carousel from "./Carousel";
import 'swiper/css/swiper.css'

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      repoList: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/sebatmohamed/repos")
      .then(response => response.json())
      .then(response => {
        this.setState({
          repoList: response
        });
      });
  }

  render() {
    
    const loader = {
      display: 'block',
      margin: '0 auto',
      width: '512px',
    }

    const code = {
      width: '100%',
      objectFit: 'cover',
      position: 'absolute',
      left: '0px',
      top: '96px',
      height: '576px',
      filter: "blur(1px)",
    }

    return (
      <div className="projects">

        <div className="title">
          <h2>Check out some of my fun projects here:</h2>
          <p>Scroll down for some more</p> 
        </div>

        <div className="carousel">
          <Carousel/>
        </div>

        <div className="projects-container">

        <h1>Interested in what else I have done? See below and my <a href="https://github.com/sebatmohamed" target="_blank">Github portfolio</a> for more!</h1>

        
          {this.state.repoList.length !== 0 
          ? 
          <ul className="repo-list">
            {this.state.repoList.map((value, index) => (
              <div className="repo-container">
                <li key={index}><span>{value.name}:</span></li>
                <div className="caption">
                  <p>{value.description}</p>
                  <p>Programming language: <span>{value.language}</span></p>
                  <p>Repo link: <a href={value.html_url} target="_blank">{value.name}</a></p> 
                </div>
              </div>
            ))}
          </ul>
          : 
          <img
            src="/loader.gif"
            alt="loading..."
            style={loader}
          />}
        </div>

      </div>
    );
  }
}

export default ProjectsPage;
