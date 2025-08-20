import React, { Component } from "react";

type PropTypes = {
  onChangeNumberInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class InputComponent extends Component<PropTypes> {
  render() {
    return (
      <div>
        <h2>InputComponent</h2>
        <input type="number" onChange={this.props.onChangeNumberInput} />
      </div>
    );
  }
}
