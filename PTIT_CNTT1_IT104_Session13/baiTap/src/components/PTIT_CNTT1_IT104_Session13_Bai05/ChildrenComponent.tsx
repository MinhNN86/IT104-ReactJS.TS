import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type PropTypes = {
  product?: Product;
};

export default class ChildrenComponent extends Component<PropTypes> {
  render() {
    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <div>Id: {this.props.product?.id}</div>
        <div>Product name: {this.props.product?.name}</div>
        <div>Price: {this.props.product?.price.toLocaleString()}đ</div>
        <div>Quantity: {this.props.product?.quantity}</div>
      </div>
    );
  }
}
