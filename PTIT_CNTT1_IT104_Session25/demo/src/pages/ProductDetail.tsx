import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId, productName } = useParams();

  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>Product Id: {productId}</h2>
      <h2>Product Name: {productName}</h2>
    </div>
  );
}
