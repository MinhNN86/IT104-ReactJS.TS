import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductDetail_Ex10() {
  const { productId } = useParams();

  const productData: Product[] = JSON.parse(
    localStorage.getItem("productData") || "[]"
  );

  const product = productData.find((p) => p.id === Number(productId));

  return (
    <div>
      {product ? (
        <div style={{ display: "flex" }}>
          <img src={product.image} alt={product.name} style={{ width: 300 }} />
          <div style={{ textAlign: "start" }}>
            <h2>Id: {product.id}</h2>
            <h2>{product.name}</h2>
            <p>Giá: {product.price.toLocaleString("vi-VN")} VND</p>
          </div>
        </div>
      ) : (
        <div>Không có sản phẩm</div>
      )}
    </div>
  );
}
