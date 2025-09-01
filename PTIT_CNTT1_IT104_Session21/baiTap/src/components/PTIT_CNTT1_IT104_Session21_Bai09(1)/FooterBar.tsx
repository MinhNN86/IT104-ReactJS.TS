import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterBar: React.FC = () => (
  <Footer style={{ textAlign: "center" }}>
    ©{new Date().getFullYear()} Created by MinhNN
  </Footer>
);

export default FooterBar;
