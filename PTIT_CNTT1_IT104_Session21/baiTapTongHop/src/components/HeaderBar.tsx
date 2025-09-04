import { Avatar, Button, Layout } from "antd";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
const { Header } = Layout;

interface HeaderBarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  colorBgContainer: string;
}

export default function HeaderBar({
  collapsed,
  setCollapsed,
  colorBgContainer,
}: HeaderBarProps) {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex items-center">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />

        <Search
          placeholder="Nhập từ khoá tìm kiếm"
          style={{
            height: 32,
            width: 269,
          }}
        />
      </div>
      <div className="flex gap-2 pe-5">
        <BellOutlined style={{ fontSize: 20 }} />
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </Header>
  );
}
