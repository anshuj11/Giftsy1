import React from "react";
import { SSL_OP_EPHEMERAL_RSA } from "constants";

class Signup extends React.Component {
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

    console.log("This.props:", this.props);

    //sleep(2000);
    this.props
      .createNewUser(this.state)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="session-form">
        <h2 className="formLabel">Sign Up </h2>
        <form className="SignUpForm">
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <br />
            <br />
            <button onClick={this.handleSubmit}>Sign Up!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
