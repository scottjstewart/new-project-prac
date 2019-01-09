import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <h1> Welcome to React Fundamentals with Scott Stewart</h1>
          <p>
            This app was created by Scott Stewart for the purpose of teaching
            and guiding new coders through the basics of React. These tools and
            lessons are valuable for any new coder and will be used for years to
            come. Through this tutorial you will work around some of the basics
            of react and even see samples of practice applications! This will
            help you unleash your inner coder so that you can start building on
            your own!
          </p>
          <hr />
          <h1>Important Notes</h1>
          <ul>
            <li>
              Being compononent based, you can move on to the next module.
            </li>
            <li>
              The styling is intentionally bland to make things simplistic and
              easy to navigate.
            </li>
            <li>At this phase, this site is not yet responsive.</li>
            <li>
              Refactor the text on this page and make this your own portfolio
              project.
            </li>
            <li>
              This app simply scratches the surface on what is possible with
              React.
            </li>
            <li>
              We have tried to collect the very best resources for this app, and
              we have cited those <Link to="/resources">here</Link>.
            </li>
            <li>
              The set up for this app might be the most confusing part. Hang in
              there..
            </li>
            <li>
              <Link to="/resources">React Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
