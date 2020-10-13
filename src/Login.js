import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
  }
  UsernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  PasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmitHandler = () => {
    if (this.state.username === "" || this.state.password === "") {
      alert("Enter email and password first!!");
    } else if (this.validateData()) {
      this.props.history.push({ pathname: "/details" });
    } else {
      alert("wrong email or password!!");
      window.location.reload();
    }
  };

  validateData = () => {
    var pattern = new RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
    if (pattern.test(this.state.username) && this.state.password.length > 8) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="card m-5 mx-auto">
        <div className="card-header">
          <h1 className="card-title">Login</h1>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <input
              type="text"
              onChange={this.UsernameHandler}
              className="form-control"
              placeholder="email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              onChange={this.PasswordHandler}
              className="form-control"
              placeholder="password"
            ></input>
          </div>
          <button
            onClick={this.onSubmitHandler}
            type="submit"
            className="mt-2 btn btn-success btn-block"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
