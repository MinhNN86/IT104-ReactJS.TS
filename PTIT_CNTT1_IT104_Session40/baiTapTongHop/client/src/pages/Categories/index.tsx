import { useEffect, useMemo, useState } from "react";
import { Button, notification } from "antd";
import { v4 as uuidv4 } from "uuid";
import {
  CategoryForm,
  CategoryTable,
  CategoryFilters,
  type CategoryRow,
  type CategoryStatus,
  type CategoryFormValues,
} from "./components";
import axios from "axios";
import Loading from "../../components/Loading";

export default function Categories() {
  const [rows, setRows] = useState<CategoryRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllCategories = async () => {
    try {
      const response = await axios.get<CategoryRow[]>(
        "http://localhost:3000/category"
      );
      if (response.status === 200) {
        setRows(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search ? r.name.toLowerCase().includes(search.toLowerCase()) : true
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

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: string) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/category/${id}`
      );
      if (response.status === 200) {
        notification.success({ message: "Xoá thành công" });
      }
    } catch (error) {
      console.log(error);
    }
    getAllCategories();
  }

  async function onSubmit(values: CategoryFormValues) {
    console.log(values);
    setLoading(true);

    if (editing) {
      const updatedCategory: CategoryRow = {
        ...editing,
        name: values.name,
        description: values.description,
        status: values.status,
      };
      try {
        const response = await axios.put(
          `http://localhost:3000/category/${editing.id}`,
          updatedCategory
        );
        if (response.status === 200) {
          notification.success({ message: "Cập nhật sản phẩm thành công" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const newCategory: CategoryRow = {
        id: uuidv4(),
        name: values.name,
        description: values.description,
        status: values.status,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/category",
          newCategory
        );
        if (response.status === 201) {
          notification.success({ message: "Thêm danh mục mới thành công" });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getAllCategories();
    setOpen(false);
    setLoading(false);
    setEditing(null);
  }

  const handleCloseModal = () => {
    setEditing(null);
    setOpen(false);
  };

  console.log(editing);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <CategoryFilters
        search={search}
        statusFilter={statusFilter}
        onSearchChange={setSearch}
        onStatusFilterChange={setStatusFilter}
      />

      <CategoryTable
        data={paged}
        totalItems={filtered.length}
        currentPage={page}
        pageSize={pageSize}
        onEdit={onEdit}
        onDelete={onDelete}
        onPageChange={setPage}
      />

      <CategoryForm
        open={open}
        editing={editing}
        onCancel={handleCloseModal}
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
