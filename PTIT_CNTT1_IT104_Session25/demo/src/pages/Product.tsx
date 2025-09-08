import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Product() {
  const [productName, setProductName] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (): void => {
    setSearchParams({
      keyword: productName, // Tìm kiếm theo tên
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  };

  console.log(searchParams.get("keyword"));
  console.log(searchParams.get("minPrice"));
  console.log(searchParams.get("maxPrice"));
  return (
    <div>
      <h1>Product</h1>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá trị bé nhất"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá trị lớn nhất"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
