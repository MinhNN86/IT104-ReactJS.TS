import React, { Component } from "react";
import InputComponent from "./InputComponent";
import ResultComponent from "./ResultComponent";

type PropTypes = {
  numberValue?: number;
};

type StateTypes = {
  numberValue?: number;
};

export default class BetweenComponent extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      numberValue: 0,
    };
  }

  render() {
    const handleUpdateNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        numberValue: Number(event.target.value),
      });
    };
    return (
      <div>
        <h1>BetweenComponent</h1>
        <hr />
        <InputComponent onChangeNumberInput={handleUpdateNumber} />
        <hr />
        <ResultComponent numberValue={this.state.numberValue} />
      </div>
    );
  }
}
