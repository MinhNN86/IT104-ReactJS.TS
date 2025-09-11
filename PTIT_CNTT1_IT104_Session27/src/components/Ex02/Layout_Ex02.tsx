import { Layout } from "antd";
import { Outlet } from "react-router-dom";

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

export default function Layout_Ex02() {
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
          <Outlet />
        </Content>
        <Footer style={footerStyle}>
          ©{new Date().getFullYear()} Created by MinhNN
        </Footer>
      </Layout>
    </div>
  );
}
