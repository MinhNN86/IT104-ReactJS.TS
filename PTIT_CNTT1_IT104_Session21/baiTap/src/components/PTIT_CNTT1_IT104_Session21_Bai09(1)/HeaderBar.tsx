import React from "react";
import { Input, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Header } = Layout;

interface HeaderBarProps {
  bgColor: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ bgColor }) => (
  <Header style={{ marginLeft: "10px", background: bgColor }}>
    {/* Bạn có thể thêm logo, user info, v.v ở đây */}
    <Input
      prefix={<SearchOutlined />}
      placeholder="Nhập từ khóa tìm kiếm"
      className="w-80"
      allowClear
    />
  </Header>
);

export default HeaderBar;
