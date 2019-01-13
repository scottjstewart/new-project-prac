import React from "react";

export default class PropsDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      backgroundColor: "blue",
      borderRadius: "5px",
      borderStyle: "dashed",
      display: "inline-block",
      width: "300px",
      textAlign: "center"
    };
  }

  colorToggle = () => {
    this.setState({
      color: this.state.color === "white" ? "red" : "white"
    });
  };

  backgroundToggle = () => {
    this.setState({
      backgroundColor: this.state.backgroundColor === "blue" ? "grey" : "blue"
    });
  };

  borderToggle = () => {
    this.setState({
      borderStyle: this.state.borderStyle === "solid" ? "dashed" : "solid"
    });
  };

  borderRadToggle = () => {
    this.setState({
      borderRadius: this.state.borderRadius === "5px" ? "10px" : "5px"
    });
  };

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <div style={this.state}>
            <FunctionalComp
              string="will this display?"
              function={this.colorToggle}
              function2={this.backgroundToggle}
              function3={this.borderToggle}
              function4={this.borderRadToggle}
            />
            <FunctionalComp
              string="this is a test string passed through props 2"
              function={this.colorToggle}
              function2={this.backgroundToggle}
              function3={this.borderToggle}
              function4={this.borderRadToggle}
            />
            <FunctionalComp
              string="this is a test string passed through props 3"
              function={this.colorToggle}
              function2={this.backgroundToggle}
              function3={this.borderToggle}
              function4={this.borderRadToggle}
            />
            <FunctionalComp
              string="this is a test string passed through props 4"
              function={this.colorToggle}
              function2={this.backgroundToggle}
              function3={this.borderToggle}
              function4={this.borderRadToggle}
            />
          </div>
        </div>
      </div>
    );
  }
}

const FunctionalComp = props => {
  return (
    <div>
      <h1>Test Strings Passed Through Props</h1>
      <p>{props.string}</p>
      <button onClick={props.function}>Color Change!</button>
      <button onClick={props.function2}>Background Color Change!</button>
      <button onClick={props.function3}>Border Change!</button>
      <button onClick={props.function4}>Round Border Change!</button>
    </div>
  );
};
