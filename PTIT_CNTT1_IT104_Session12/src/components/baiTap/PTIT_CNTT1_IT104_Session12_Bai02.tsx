import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai02 extends Component {
  render() {
    const add = (a: number, b: number): number => a + b;
    const subtract = (a: number, b: number) => a - b;
    const multiply = (a: number, b: number) => a * b;
    const divide = (a: number, b: number): string | number =>
      b === 0 ? "Không thể chia cho 0" : a / b;

    const a: number = 10;
    const b: number = 10;
    return (
      <div>
        <h2>Danh sách kết quả</h2>
        <ul>
          <li>
            {a} + {b} = {add(a, b)}
          </li>
          <li>
            {a} - {b} = {subtract(a, b)}
          </li>
          <li>
            {a} * {b} = {multiply(a, b)}
          </li>
          <li>
            {a} / {b} = {divide(a, b)}
          </li>
        </ul>
      </div>
    );
  }
}
