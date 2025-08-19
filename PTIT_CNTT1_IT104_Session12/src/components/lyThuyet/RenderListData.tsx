import React, { Component } from "react";
export default class RenderListData extends Component {
  render() {
    const product = [
      {
        id: 1,
        name: "Cam",
        price: 100000,
      },
      {
        id: 2,
        name: "Xoài",
        price: 200000,
      },
      {
        id: 3,
        name: "Táo",
        price: 300000,
      },
    ];
    return (
      <React.Fragment>
        <h1>List product</h1>

        {product.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div>ID: {product.id}</div>
              <div>Name: {product.name}</div>
              <div>Price: {product.price}</div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
