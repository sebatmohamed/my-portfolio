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

        <div className="hero-banner">
          <img 
            src="/coding-banner.png" 
            alt="coding image"
            style={code}
          />
          <h1>Projects</h1>
        </div>

        <div className="carousel">
          <h1> Filter text will go here</h1>
          <Carousel/>
        </div>


        <div className="projects-container">
        
          {this.state.repoList.length !== 0 
          ? 
          <ul className="repo-list">
            {this.state.repoList.map((value, index) => (
              <li key={index}><span>{value.name}:</span> <br/> {value.description} <br/> Repo: <a href={value.html_url}>{value.name}</a></li>
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
