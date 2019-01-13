import React from "react";

export default class PropsDemo extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <FunctionalComp string="will this display?" />
        </div>
      </div>
    );
  }
}

const FunctionalComp = props => {
  return (
    <div>
      <p>{props.string}</p>
    </div>
  );
};
