import React, { useState } from "react";
type Product = {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
};
export default function PTIT_CNTT1_IT104_Session17_Bai02() {
  const [product, setProduct] = useState<Product | null>({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <div>Id: {product?.id}</div>
      <div>Name: {product?.name}</div>
      <div>Price: {product?.price} $</div>
      <div>Quantity: {product?.quantity}</div>
    </div>
  );
}
