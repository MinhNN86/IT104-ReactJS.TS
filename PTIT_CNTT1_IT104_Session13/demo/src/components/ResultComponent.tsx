import React, { Component } from "react";

type PropTypes = {
  numberValue?: number;
};

export default class ResultComponent extends Component<PropTypes> {
  static defaultProps = {
    numberValue: 0,
  };
  render() {
    return (
      <div>
        <h3>ResultComponent</h3>
        <h3>{this.props.numberValue}</h3>
      </div>
    );
  }
}
