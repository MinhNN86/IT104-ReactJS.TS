import React, { Component } from "react";

type PropTypes = {
  companyName?: string;
  age?: number;
  position?: string;
};
export default class GrandChildrenComponent extends Component<PropTypes> {
  render() {
    const { companyName, age, position } = this.props;

    return (
      <div>
        <h4>GrandChildrenComponent</h4>
        <div>CompanyName: {companyName}</div>
        <div>Age: {age}</div>
        <div>Position: {position}</div>
      </div>
    );
  }
}
