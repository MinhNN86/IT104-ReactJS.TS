import { Input, Avatar, Button } from "antd";
import {
  BellOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

interface HeaderBarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function HeaderBar({
  collapsed,
  onToggleCollapse,
}: HeaderBarProps) {
  return (
    <header className="h-14 bg-white flex items-center px-6 shadow-sm justify-between">
      <div className="flex items-center gap-4">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggleCollapse}
          style={{
            fontSize: "14px",
            width: 40,
            height: 40,
          }}
        />
        <Input.Search
          placeholder="Nhập từ khoá tìm kiếm"
          style={{ width: 300 }}
        />
      </div>
      <div className="flex items-center gap-4">
        <BellOutlined className="text-xl" />
        <Avatar icon={<UserOutlined />} />
      </div>
    </header>
  );
}
