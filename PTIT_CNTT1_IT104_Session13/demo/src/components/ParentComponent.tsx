import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default class ParentComponent extends Component {
  render() {
    const companyName: string = "Demo";
    const age: number = 5;

    return (
      <div>
        <h2>ParentComponent</h2>
        {/* Prop */}
        <ChildrenComponent companyName={companyName} age={age} />
      </div>
    );
  }
}
