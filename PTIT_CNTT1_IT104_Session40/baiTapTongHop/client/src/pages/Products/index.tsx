import { useMemo, useState, useEffect } from "react";
import { Button, notification, Pagination } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ProductForm, ProductTable, ProductFilters } from "./components";
import axios from "axios";
import type { ProductRow, ProductStatus, ProductFormValues } from "./types";
import Loading from "../../components/Loading";

export default function Products() {
  const [rows, setRows] = useState<ProductRow[]>([]);

  const getAllProduct = async () => {
    try {
      const response = await axios.get<ProductRow[]>(
        "http://localhost:3000/products"
      );
      if (response.status === 200) {
        setRows(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: ProductRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: string) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/products/${id}`
      );
      if (response.status === 200) {
        notification.success({ message: "Xoá thành công" });
      }
    } catch (error) {
      console.log(error);
    }
    getAllProduct();
  }

  async function onSubmit(values: ProductFormValues) {
    let imageUlr: string = "";
    setLoading(true);

    // Nếu có file ảnh thì upload lên Cloudinary, không thì bỏ qua
    if (values.imageFile) {
      const formData = new FormData();
      formData.append("file", values.imageFile);
      formData.append("upload_preset", "Session40");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwzqispdh/image/upload",
          formData
        );
        if (response.status === 200) {
          imageUlr = response.data.secure_url;
        } else {
          notification.error({ message: "Lỗi: Không upload được ảnh" });
          setLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
        notification.error({ message: "Lỗi: Không upload được ảnh" });
        setLoading(false);
        return;
      }
    }

    // Nếu đang sửa thì update, nếu không thì thêm mới
    if (editing) {
      // Giữ nguyên id cũ, cập nhật các trường khác
      const updatedProduct: ProductRow = {
        ...editing,
        code: values.code,
        name: values.name,
        category: values.category,
        price: Number(values.price) || 0,
        image: imageUlr || editing.image,
        status: values.status,
      };
      try {
        const response = await axios.put(
          `http://localhost:3000/products/${editing.id}`,
          updatedProduct
        );
        if (response.status === 200) {
          notification.success({ message: "Cập nhật sản phẩm thành công" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const newProduct: ProductRow = {
        id: uuidv4(),
        code: values.code,
        name: values.name,
        category: values.category,
        price: Number(values.price) || 0,
        image: imageUlr,
        status: values.status,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/products",
          newProduct
        );
        if (response.status === 201) {
          notification.success({ message: "Thêm sản phẩm mới thành công" });
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLoading(false);
    getAllProduct();
    setOpen(false);
    setEditing(null);
  }

  const handleCloseModal = () => {
    setOpen(false);
    setEditing(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <ProductFilters
        search={search}
        statusFilter={statusFilter}
        onSearchChange={setSearch}
        onStatusFilterChange={setStatusFilter}
      />

      <ProductTable data={paged} onEdit={onEdit} onDelete={onDelete} />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <ProductForm
        open={open}
        editing={editing}
        onClose={handleCloseModal}
        onSubmit={onSubmit}
      />
      {loading && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50">
          <Loading />
        </div>
      )}
    </div>
  );
}
