import { Button, Form, Input, Modal, Select } from "antd";
import type { CategoryRow, CategoryFormValues } from "./types";
import { useEffect } from "react";

interface CategoryFormProps {
  open: boolean;
  editing: CategoryRow | null;
  onCancel: () => void;
  onSubmit: (values: CategoryFormValues) => void;
}

export default function CategoryForm({
  open,
  editing,
  onCancel,
  onSubmit,
}: CategoryFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      if (editing) {
        form.setFieldsValue(editing);
      } else {
        form.setFieldsValue({ status: "active", name: "", description: "" });
      }
    }
  }, [open, editing, form]);

  const handleClose = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
      open={open}
      onCancel={handleClose}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={onSubmit}
        initialValues={editing ?? { status: "active" }}
        form={form}
      >
        <Form.Item
          name="name"
          label="Tên"
          rules={[{ required: true, message: "Nhập tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="status"
          label="Trạng thái"
          rules={[{ required: true }]}
        >
          <Select
            options={[
              { value: "active", label: "Hoạt động" },
              { value: "inactive", label: "Ngừng" },
            ]}
          />
        </Form.Item>

        <Form.Item name="description" label="Mô tả">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item noStyle>
          <div className="flex justify-end gap-2">
            <Button onClick={handleClose}>Hủy</Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}
