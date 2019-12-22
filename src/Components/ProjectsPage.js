import "../../css/projects.css";
import BackgroundImage from "./BackgroundImage";

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
      width: '128px',
    }

    return (
      <div className="projects">
        <BackgroundImage />

        <div className="projects-container">
          {this.state.repoList.length !== 0 
          ? 
          <ul className="repo-list">
            {this.state.repoList.map((value, index) => (
              <li key={index}><span>{value.name}:</span> <br/> {value.description} <br/> Language: {value.language} <br/> Repo: <a href={value.html_url}>{value.html_url}</a></li>
            ))}
          </ul>
          : 
          <img
            src="http://www.ifmo.ru/images/loader.gif"
            alt="loading..."
            style={loader}
          />}
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
