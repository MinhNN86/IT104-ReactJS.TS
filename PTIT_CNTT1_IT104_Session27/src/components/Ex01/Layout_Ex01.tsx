import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

// const items = Array.from({ length: 3 }).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

const items = [
  {
    key: "Home",
    label: "Home",
  },
  {
    key: "About",
    label: "About",
  },
  {
    key: "Contact",
    label: "Contact",
  },
];

export default function Layout_Ex01() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Xử lý chuyển trang khi click menu
  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "Home") navigate("/ex01");
    if (e.key === "About") navigate("/ex01/about");
    if (e.key === "Contact") navigate("/ex01/contact");
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
          defaultSelectedKeys={["Home"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleMenuClick}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            marginTop: 20,
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
