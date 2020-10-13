import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details";
import Display from "./Components/Display";
import Login from "./Login";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/details" component={Details} />
            <Route path="/display" component={Display} />
            <Route
              render={() => (
                <h1 className="mt-2 text-danger">404: Not Found</h1>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
