import { Input, Avatar } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

export default function HeaderBar() {
  return (
    <header className="h-14 bg-white flex items-center px-6 shadow-sm justify-between">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Nhập từ khóa tìm kiếm"
        className="w-80"
        allowClear
      />
      <div className="flex items-center gap-4">
        <BellOutlined className="text-xl" />
        <Avatar icon={<UserOutlined />} />
      </div>
    </header>
  );
}
