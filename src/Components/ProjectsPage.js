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
      .then(data => {
        this.setState({
          repoList: data
        })
      })
  }

  render() {

    return (
      <div>
        <BackgroundImage />
        <h1>This is where you can see my code</h1>
      </div>
    );
  }
}

export default ProjectsPage;
