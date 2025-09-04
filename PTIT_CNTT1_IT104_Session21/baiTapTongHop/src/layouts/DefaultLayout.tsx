import React, { useState } from "react";

import { Breadcrumb, Layout, theme } from "antd";
import SideBar from "../components/SideBar";
import HeaderBar from "../components/HeaderBar";
import { Footer } from "antd/es/layout/layout";
import ContentEmployee from "../components/ContentEmployee";

const { Sider, Content } = Layout;

export default function DefaultLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideBar />
      </Sider>
      <Layout>
        <HeaderBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              { title: "Quản lý nhân sự" },
              { title: "Quản lý nhân viên" },
              { title: "Danh sách nhân viên" },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ContentEmployee />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#94A3B8" }}>
          ©{new Date().getFullYear()} Created by MinhNN
        </Footer>
      </Layout>
    </Layout>
  );
}
