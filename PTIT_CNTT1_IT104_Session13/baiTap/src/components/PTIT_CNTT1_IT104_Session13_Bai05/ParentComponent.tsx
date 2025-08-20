import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type StateTypes = {
  product: Product;
};

export default class ParentComponent extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: 12000,
        quantity: 6,
      },
    };
  }
  render() {
    return <ChildrenComponent product={this.state.product} />;
  }
}
