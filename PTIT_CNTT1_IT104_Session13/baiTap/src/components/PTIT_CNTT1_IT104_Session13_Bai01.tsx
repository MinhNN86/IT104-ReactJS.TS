import React, { Component } from "react";

type StateTypes = {
  name?: string;
};

export default class PTIT_CNTT1_IT104_Session13_Bai01 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      name: "Nguyễn Minh Sơn",
    };
  }
  render() {
    return (
      <div>
        <h1>Họ và tên: {this.state.name}</h1>
      </div>
    );
  }
}
