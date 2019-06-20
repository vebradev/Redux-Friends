import React from "react";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { Route, Redirect } from "react-router";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route
          path="/"
          render={pr =>
            localStorage.getItem("token") ? (
              <div>
                <Friends {...pr} />
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}

export default App;
