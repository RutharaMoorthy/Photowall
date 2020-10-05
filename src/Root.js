import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Form from "./Form";

class Root extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={(history) => <App {...history} />} exact />
        <Route
          path="/form"
          component={(history) => <Form {...history} />}
          exact
        />
      </div>
    );
  }
}

export default Root;
