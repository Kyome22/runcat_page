import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from "query-string";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        render={(props) => (
          <App qs={queryString.parse(props.location.search)} />
        )}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
