import React, { Component } from "react";

type PropTypes = {
  name?: string;
};

export default class Children_Comp extends Component<PropTypes> {
  render() {
    return <div>Họ và tên bên component con: {this.props.name}</div>;
  }
}
