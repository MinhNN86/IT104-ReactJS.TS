import React, { Component, createRef } from "react";

export default class PTIT_CNTT1_IT104_Session14_Bai05 extends Component {
  private productCodeRef = createRef<HTMLInputElement>();
  private productNameRef = createRef<HTMLInputElement>();
  private priceRef = createRef<HTMLInputElement>();
  private quantityRef = createRef<HTMLInputElement>();
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const productCodeValue = this.productCodeRef.current?.value;
      const productNameValue = this.productNameRef.current?.value;
      const priceValue = this.priceRef.current?.value;
      const quantityValue = this.quantityRef.current?.value;

      const newProduct = {
        productCode: productCodeValue,
        productName: productNameValue,
        price: Number(priceValue),
        quantity: Number(quantityValue),
      };

      console.log(newProduct);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Thêm mới sản phẩm</h1>
          <div>Mã sản phẩm</div>
          <input type="text" name="productCode" ref={this.productCodeRef} />
          <div>Tên sản phẩm</div>
          <input type="text" name="productName" ref={this.productNameRef} />
          <div>Giá</div>
          <input type="number" name="price" ref={this.priceRef} />
          <div>Số lượng</div>
          <input type="number" name="quantity" ref={this.quantityRef} />
          <div>
            <button>Đăng ký</button>
          </div>
        </form>
      </div>
    );
  }
}
