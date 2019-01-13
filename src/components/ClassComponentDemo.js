import React, { Component } from "react";

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { simpleMessage: "Welcome user!!!" };
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <ClassComponentNotes />
          <h4>{this.state.simpleMessage}</h4>
        </div>
      </div>
    );
  }
}

const ClassComponentNotes = () => {
  return (
    <div>
      <h1>Class Components</h1>

      <p>
        Class components are consider the "React way" of writing components.
      </p>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them</dd>
        <dt>must extend Component</dt>
        <dd>Class components need to extend the React Component.</dd>
        <dt>render(</dt>
        <dd>Class components must alwats have a render method.</dd>
        <dt>export</dt>
        <dd>Only one class component exported per file.</dd>
      </dl>
    </div>
  );
};
