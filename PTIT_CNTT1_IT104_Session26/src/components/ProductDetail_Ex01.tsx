import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail_Ex01() {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>Id: {id}</h2>
    </div>
  );
}
