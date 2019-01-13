import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXcomponent";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rationale">Rationale</Link>
        </li>
        <li>
          <Link to="/jsxrules">JSX Rules</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/functionaldemo">Functional Component Demo</Link>
        </li>
      </ul>
    </div>
    <div className="sidebar-route">
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/functionaldemo">
          <FunctionalComponentDemo />
        </Route>
        <Route exact path="/jsxrules">
          <JSXRules />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Sidebar;
