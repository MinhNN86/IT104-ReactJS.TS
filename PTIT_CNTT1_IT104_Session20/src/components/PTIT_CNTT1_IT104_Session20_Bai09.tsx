import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];
export default function PTIT_CNTT1_IT104_Session20_Bai09() {
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="container" style={{ maxWidth: 900, margin: "40px auto" }}>
        <div className="bg-white rounded-4 shadow p-4">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#29486a" }}>
            Tìm kiếm sản phẩm
          </h2>
          <input
            className="form-control form-control-lg mb-5 text-center"
            style={{ borderRadius: 14, maxWidth: 520, margin: "0 auto" }}
            placeholder="Nhập từ khóa tìm kiếm..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="row">
            {filtered.map((product) => (
              <div className="col-md-6 mb-4" style={{ minWidth: 320 }}>
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    borderRadius: 14,
                    border: "1.5px solid #e5e6e7",
                    background: "#fff",
                  }}
                >
                  <div className="card-body">
                    <div
                      className="card-title fw-bold"
                      style={{ fontSize: 20 }}
                    >
                      {product.name}
                    </div>
                    <div
                      className="card-text text-muted"
                      style={{ fontSize: 16 }}
                    >
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
