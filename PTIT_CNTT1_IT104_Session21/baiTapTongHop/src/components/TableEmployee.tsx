import React from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  id?: string;
  name?: string;
  age?: number;
  address?: string;
  number?: string;
}

interface TableEmployeeProps {
  dataEmployee: DataType[];
  onEdit: (employee: DataType) => void;
  onDelete: (employee: DataType) => void;
}

export default function TableEmployee({
  dataEmployee,
  onEdit,
  onDelete,
}: TableEmployeeProps) {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Số điện thoại",
      dataIndex: "number",
    },
    {
      width: 200,
      title: "Hành động",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            color="default"
            variant="dashed"
            onClick={() => onEdit(record)}
          >
            Sửa
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => onDelete(record)}
          >
            Xoá
          </Button>
        </div>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Table<DataType>
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={dataEmployee}
        rowKey={"id"}
      />
    </div>
  );
}
