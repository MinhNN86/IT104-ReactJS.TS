import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

type StateTypes = {
  name?: string;
};

export default class Parent_Comp extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      name: "Nguyễn Văn Nam",
    };
  }
  render() {
    return (
      <div>
        <div>Họ và tên bên component cha: {this.state.name}</div>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
