import React from "react";
// import PropTypes from "prop-types";

const propsFromOutside = [
  { string: "Color Toggle", function: "colorToggle" },
  { string: "Background Color Toggle", function: "backgroundToggle" },
  { string: "Border Style Toggle", function: "borderToggle" },
  { string: "Border Radius Toggle", function: "borderRadToggle" }
];

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
    const display = propsFromOutside.map((el, index) => {
      return (
        <FunctionalComp
          key={index}
          string={el.string}
          function={this[`${el.function}`]}
        />
      );
    });
    return (
      <div className="main">
        <div className="mainDiv">
          <div style={this.state}>{display}</div>
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
      <button onClick={props.function}>Make a Change!</button>
    </div>
  );
};

// FunctionalComp.defaultProps = {
//   string: "this is a crazy thingamajigger!",
//   function: () => console.log("PropTypes are crazy!")
// };

// FunctionalComp.propTypes = {
//   string: PropTypes.string.isRequired,
//   function: PropTypes.func.isRequired
// };
