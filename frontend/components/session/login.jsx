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
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          Welcome to Giftsy!
          <br />
          Please {this.props.formType} or {this.props.otherForm}
          {this.renderErrors()}
          <div className="login-form">
            {/* <h2> Log In!</h2>
        <form className="SignUpForm"> */}
            <br />
            <br />
            <label>
              Username <br /> <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </label>
            <br />
            <br />
            <label>
              Password <br /> <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            </label>
            <br />
            <br />
            {/* <button onClick={this.handleSubmit}>Log In!</button> */}
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />

            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
