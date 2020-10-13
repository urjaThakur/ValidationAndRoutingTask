import React, { Component } from "react";
import "../App.css";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      address: "",
    };
  }
  componentDidMount() {}

  onSubmitHandler = () => {
    this.props.history.push({
      pathname: "/display",
      state: {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        address: this.state.address,
      },
    });
  };

  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="card m-5 mx-auto">
        <div className="card-header bg-dark">
          <h1 className="card-title text-white">Enter User Details</h1>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <input
              type="text"
              name="name"
              onChange={this.ChangeHandler}
              className="form-control"
              placeholder="name"
            ></input>
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="username"
              onChange={this.ChangeHandler}
              className="form-control"
              placeholder="username"
            ></input>
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="email"
              onChange={this.ChangeHandler}
              className="form-control"
              placeholder="email"
            ></input>
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="address"
              onChange={this.ChangeHandler}
              className="form-control"
              placeholder="address"
            ></input>
          </div>
          <button
            onClick={this.onSubmitHandler}
            type="submit"
            className="mt-2 btn btn-success btn-block"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Details;
