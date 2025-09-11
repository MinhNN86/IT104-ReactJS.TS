import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}
const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];
export default function ProductList_Ex04() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);
  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword.trim() });
    } else {
      setSearchParams({}); // xóa query nếu rỗng
    }
  };

  return (
    <div style={{ marginTop: 50, textAlign: "center" }}>
      <h1>Danh sách sản phẩm</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <strong>{p.name}</strong> - {p.price.toLocaleString("vi-VN")} VND
            <br />
            <small>{p.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
