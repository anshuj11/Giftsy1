import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
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
            >
              Sign in
            </button>

            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
