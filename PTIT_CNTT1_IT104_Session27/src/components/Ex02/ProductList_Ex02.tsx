import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
  height: "auto",
};

const contentStyle: React.CSSProperties = {
  marginLeft: "40px",
  lineHeight: "120px",
  color: "black",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  minHeight: "100vh",
};

import { Card } from "antd";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop phân khúc cao cấp",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 30000000,
    description: "Điện thoại cao cấp của Apple",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Flagship Android của Samsung",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Tai nghe chống ồn cao cấp",
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Đồng hồ thông minh Apple",
  },
];

export default function ProductList_Ex02() {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <Layout style={layoutStyle}>
        <Header style={{ ...headerStyle, padding: 0 }}>
          <h1 style={{ marginBottom: 8, marginTop: 0 }}>
            TRANG CHI TIẾT SẢN PHẨM
          </h1>
          <p style={{ marginTop: 0, marginBottom: 0 }}>Danh sách sản phẩm</p>
        </Header>
        <Content style={contentStyle}>
          <div style={{ padding: "20px 40px" }}>
            <h1 style={{ marginBottom: 20 }}>Danh sách sản phẩm</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.name}
                  style={{
                    width: 250,
                    flex: "1 0 250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Giá: {product.price.toLocaleString("vi-VN")} VND</p>
                  <Link
                    to={`/products-ex02/${product.id}`}
                    style={{ color: "blue" }}
                  >
                    Xem chi tiết
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Content>
        <Footer style={footerStyle}>
          ©{new Date().getFullYear()} Created by MinhNN
        </Footer>
      </Layout>
    </div>
  );
}
