import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmitDemo(e) {
    e.preventDefault();

    // this.setState({ ["username"]: "DemoUser" });
    // // console.log("State: ", this.state);
    // this.setState({ ["password"]: "HelloWorld" });
    const user = Object.assign(
      {},
      { username: "DemoUser", password: "HelloWorld" }
    );
    //debugger;
    //const user = Object.assign({}, this.state);
    // console.log("State: ", this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    debugger;
    return (
      <ul className="ErrList">
        {this.props.errors.map((error, i) => (
          <li className="ErrMsg" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        {/* </div><form onSubmit={this.handleSubmit} className="login-form-box"> */}
        <form className="login-form-box">
          <br />
          {/* Please {this.props.formType} or {this.props.otherForm} */}
          <div className="formTypeMessage">
            {" "}
            {this.props.formType.toUpperCase()} to Continue{" "}
          </div>
          {this.renderErrors()}
          <div className="login-form">
            {/* <h2> Log In!</h2>
        <form className="SignUpForm"> */}
            <br />
            <br />
            <label>
              <div className="FormLabels">
                Username <br /> <br />
              </div>
              <input
                className="inputFields"
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </label>
            <br />
            <br />
            <label>
              <div className="FormLabels">
                Password <br /> <br />
              </div>
              <input
                className="inputFields"
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            </label>
            <br />
            <br />
            {/* <button onClick={this.handleSubmit}>Log In!</button> */}
            <button
              className="session-submit"
              type="submit"
              value={this.props.formType}
              onClick={this.handleSubmit}
            >
              {this.props.formType === "login" ? "Sign in" : "Sign Up"}
            </button>
            <br />
            <br />
            <button
              className="session-submit"
              type="submit"
              value="login"
              onClick={this.handleSubmitDemo}
            >
              Demo User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
