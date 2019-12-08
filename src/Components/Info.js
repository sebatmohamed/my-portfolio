import '../../css/about.css'

class Info extends React.Component {
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
        <div className="about-container">
          <div className="left">
            <div className="headline">
              <div className="title">Hey! My name is Sebat 🙂</div>

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
              />
            </form>

            <div>
              <span>{this.state.yourName}</span>
            </div>
          </div>

          <div className="right">
            <h1>A picture will go here</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
