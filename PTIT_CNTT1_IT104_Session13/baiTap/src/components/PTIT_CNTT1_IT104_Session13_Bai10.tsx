import React, { Component } from "react";
type StateTypes = {
  input: string;
};
export default class PTIT_CNTT1_IT104_Session13_Bai10 extends Component<
  object,
  StateTypes
> {
  state: StateTypes = { input: "" };
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ input: event.target.value });
    };

    return (
      <div style={{ margin: 100 }}>
        <h2>Dữ liệu: {this.state.input}</h2>
        <input type="text" value={this.state.input} onChange={handleChange} />
      </div>
    );
  }
}
