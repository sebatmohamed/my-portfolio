import "../../css/projects.css";
import BackgroundImage from "./BackgroundImage";

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      repoList: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/sebatmohamed/repos")
      .then(response => response.json())
      .then(response => {
        this.setState({
          repoList: response
        })
      })
  }

  render() {
    return (
      <div>
        <BackgroundImage />
        <h1>This is where you can see my code</h1>

      {this.state.repoList.length !== 0
      ? <p>{this.state.repoList[0].name}</p>
      : <p>Loading...</p>}

      </div>
    );
  }
}

export default ProjectsPage;
