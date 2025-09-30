import { Input, Select } from "antd";
import type { ProductStatus } from "../types";

interface ProductFiltersProps {
  search: string;
  statusFilter: ProductStatus | "";
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: ProductStatus | "") => void;
}

export default function ProductFilters({
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
}: ProductFiltersProps) {
  return (
    <div className="flex justify-end gap-3">
      <Select
        placeholder="Tất cả"
        className="min-w-40"
        allowClear
        defaultValue={""}
        value={statusFilter || undefined}
        onChange={(v) => onStatusFilterChange((v as ProductStatus) || "")}
        options={[
          { value: "", label: "Tất cả" },
          { value: "active", label: "Hoạt động" },
          { value: "inactive", label: "Ngừng hoạt động" },
        ]}
      />
      <Input
        style={{ width: "300px" }}
        placeholder="Tìm kiếm"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
