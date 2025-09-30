import { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import type { ProductRow, ProductFormValues } from "../types";
import type { CategoryRow } from "../../Categories/components";
import axios from "axios";

interface ProductFormProps {
  open: boolean;
  editing: ProductRow | null;
  onClose: () => void;
  onSubmit: (values: ProductFormValues & { imageFile?: File }) => void;
}

export default function ProductForm({
  open,
  editing,
  onClose,
  onSubmit,
}: ProductFormProps) {
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [categoryData, setCategoryData] = useState<CategoryRow[]>([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/category");
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const resetForm = () => {
    form.resetFields();
    setImageFile(undefined);
  };

  const handleFinish = (values: ProductFormValues) => {
    onSubmit({ ...values, imageFile });
    resetForm();
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  useEffect(() => {
    if (editing) {
      form.setFieldsValue(editing);
    } else {
      form.resetFields();
    }
    setImageFile(undefined);
  }, [editing, form]);

  return (
    <Modal
      title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
      open={open}
      onCancel={handleClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{ status: "active" }}
      >
        <Form.Item
          name="code"
          label="Mã"
          rules={[{ required: true, message: "Nhập mã" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên"
          rules={[{ required: true, message: "Nhập tên" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Danh mục"
          rules={[{ required: true, message: "Chọn danh mục" }]}
        >
          <Select
            options={categoryData.map((category) => ({
              value: category.name,
              label: category.name,
            }))}
            placeholder="Nhập tên danh mục"
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Giá"
          rules={[{ required: true, message: "Nhập giá" }]}
        >
          <Input type="number" min={0} />
        </Form.Item>
        <Form.Item label="Ảnh (file)">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setImageFile(file);
            }}
          />
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
