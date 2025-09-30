import { Button, Table, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CategoryRow } from "./types";

interface CategoryTableProps {
  data: CategoryRow[];
  totalItems: number;
  currentPage: number;
  pageSize: number;
  onEdit: (row: CategoryRow) => void;
  onDelete: (id: string) => void;
  onPageChange: (page: number) => void;
}

export default function CategoryTable({
  data,
  totalItems,
  currentPage,
  pageSize,
  onEdit,
  onDelete,
  onPageChange,
}: CategoryTableProps) {
  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}
