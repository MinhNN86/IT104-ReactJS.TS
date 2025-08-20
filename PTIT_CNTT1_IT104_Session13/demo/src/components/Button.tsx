import React, { Component } from "react";

type PropTypes = {
  content?: string;
  children?: React.ReactNode; //Children props
};

export default class Button extends Component<PropTypes> {
  render() {
    return <button>{this.props.children}</button>;
  }
}
