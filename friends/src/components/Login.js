import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/actionCreators";

export class Login extends React.Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  onLogin = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    this.props.login({ username, password });

    if (localStorage.getItem("token")) {
      this.props.history.push("/friends");
    }
  };

  render() {
    return (
      <div>
        <input placeholder="Username" type="text" ref={this.usernameRef} />
        <input placeholder="Password" type="text" ref={this.passwordRef} />
        <button onClick={this.onLogin}>Log in</button>
      </div>
    );
  }
}

export default connect(
  state => state,
  { login }
)(Login);
