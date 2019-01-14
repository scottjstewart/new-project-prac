import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXcomponent";
import ClassComponentDemo from "../ClassComponentDemo";
import CounterComponentDemo from "../SImpleCounter";
import PropsDemo from "../concepts/PropsDemo";

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
        <li>
          <Link to="/classcomponentdemo">Class Component Demo</Link>
        </li>
        <li>
          <Link to="/countercomponent">Counter Component Demo</Link>
        </li>
        <li>
          <Link to="/propsdemo">Props Demo</Link>
        </li>
        <li>
          <Link to="/lifecycle">Lifecycle Code Pen</Link>
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
        <Route exact path="/classcomponentdemo">
          <ClassComponentDemo />
        </Route>
        <Route exact path="/countercomponent">
          <CounterComponentDemo />
        </Route>
        <Route exact path="/propsdemo">
          <PropsDemo />
        </Route>
        <Route exact path="/lifecycle">
          <iframe
            height="265"
            scrolling="no"
            title="React components lifecycle diagram"
            src="//codepen.io/ccharris/embed/wxdKYa/?height=265&theme-id=0&default-tab=html,result"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="{true}?"
            width="100%"
          >
            See the Pen{" "}
            <a href="https://codepen.io/ccharris/pen/wxdKYa/">
              React components lifecycle diagram
            </a>{" "}
            by Carolyn Harris (
            <a href="https://codepen.io/ccharris">@ccharris</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Sidebar;
