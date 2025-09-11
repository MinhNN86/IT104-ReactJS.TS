import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Product",
  },
  {
    key: "3",
    label: "Detail",
  },
];

export default function Layout_Ex06() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "1") navigate("/ex06");
    if (e.key === "2") navigate("/ex06/product");
    if (e.key === "3") navigate("/ex06/detail");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleMenuClick}
        />
      </Header>
      <Content style={{ padding: "20px 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} Created by MinhNN
      </Footer>
    </Layout>
  );
}
