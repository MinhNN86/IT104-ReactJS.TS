import React, { useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import Breadcrumbs from "./Breadcrumbs";
import ContentBox from "./ContentBox";
import FooterBar from "./FooterBar";

const { Content } = Layout;

export default function PTIT_CNTT1_IT104_Session21_Bai09_1() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <HeaderBar bgColor={colorBgContainer} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumbs items={[{ title: "User" }, { title: "Bill" }]} />
          <ContentBox bgColor={colorBgContainer} borderRadius={borderRadiusLG}>
            Bill is a cat.
          </ContentBox>
        </Content>
        <FooterBar />
      </Layout>
    </Layout>
  );
}
