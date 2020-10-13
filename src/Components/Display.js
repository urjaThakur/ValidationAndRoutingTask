import React, { Component } from "react";
import "../App.css";
class Display extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="card m-5 mx-auto">
          <div className="card-header bg-dark">
            <h1 className="card-title text-white">User Details</h1>
          </div>
          <div className="card-body">
            <p className="lead">Name: {this.props.location.state.name}</p>
            <p className="lead">
              Username: {this.props.location.state.username}
            </p>
            <p className="lead">Email: {this.props.location.state.email}</p>
            <p className="lead">Address: {this.props.location.state.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
