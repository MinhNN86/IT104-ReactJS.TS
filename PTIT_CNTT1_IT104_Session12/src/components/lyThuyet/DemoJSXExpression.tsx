import React, { Component } from "react";

export default class DemoJSXExpression extends Component {
  render() {
    const companyName: string = "Demo";

    const sum = (firstNumber: number, secondNumber: number): number => {
      return firstNumber + secondNumber;
    };

    const showCompanyName = (name: string): string => {
      return `Tên công ty: ${name}`;
    };

    const user = {
      id: 1,
      name: "Nguyễn Văn A",
      age: 20,
    };

    const sourceImg =
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-thump.jpg";

    const height = 200;

    return (
      <div>
        <div>Company: {companyName}</div>
        <div>20 + 30 = {sum(20, 30)}</div>
        <div>{showCompanyName("Demo")}</div>
        <div>{JSON.stringify(user)}</div>

        <img height={height} src={sourceImg} alt="" />
      </div>
    );
  }
}
