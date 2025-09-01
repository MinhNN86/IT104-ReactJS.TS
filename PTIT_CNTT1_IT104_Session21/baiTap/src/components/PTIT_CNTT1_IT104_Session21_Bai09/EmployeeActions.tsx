import { Button } from "antd";

export default function EmployeeActions() {
  return (
    <div className="flex gap-2">
      <Button size="small">Sửa</Button>
      <Button size="small" danger>
        Xóa
      </Button>
    </div>
  );
}
