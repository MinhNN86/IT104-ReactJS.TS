import { Button } from "antd";

export default function EmployeeActions() {
  return (
    <div className="flex gap-2">
      <Button size="small" color="default" variant="dashed">
        Sửa
      </Button>
      <Button size="small" color="danger" variant="solid">
        Xóa
      </Button>
    </div>
  );
}
