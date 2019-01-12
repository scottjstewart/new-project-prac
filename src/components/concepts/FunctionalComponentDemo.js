import React from "react";

const FunctionalCompnentDemo = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Functional Components</h1>
        <p>
          Functional Components allow you to render information to the web page
          without having to use or change state.
        </p>
        <dl>
          <dt>Presentational</dt>
          <dd>
            Often used for simply rendering a small chunk of code to the dom.
          </dd>
          <dt>No 'this' keyword</dt>
          <dd>Unlike class components, functional ones don't use 'this'</dd>
          <dt>No state</dt>
          <dd>These are 'dumb' components for UI.</dd>
          <dt>return()</dt>
          <dd>Must return a single element.</dd>
        </dl>
        <h1>Functional Syntax versus Arrow Function</h1>
      </div>
    </div>
  );
};

export default FunctionalCompnentDemo;
