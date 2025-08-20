import React, { Component } from "react";
import GrandChildrenComponent from "./GrandChildrenComponent";

type PropTypes = {
  companyName?: string;
  age?: number;
};

export default class ChildrenComponent extends Component<PropTypes> {
  static defaultProps = {
    companyName: "Demo",
    age: 3,
  };

  render() {
    // Destructuring props
    const { companyName, age } = this.props;
    const position: string = "Tester";

    return (
      <div>
        <h3>ChildrenComponent</h3>
        <div>CompanyName: {companyName}</div>
        <div>age: {age}</div>
        <GrandChildrenComponent
          companyName={companyName}
          age={age}
          position={position}
        />
      </div>
    );
  }
}
