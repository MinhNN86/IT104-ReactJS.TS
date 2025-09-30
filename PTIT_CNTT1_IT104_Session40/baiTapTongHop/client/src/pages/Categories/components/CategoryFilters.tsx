import { Input, Select } from "antd";
import type { CategoryStatus } from "./types";

interface CategoryFiltersProps {
  search: string;
  statusFilter: CategoryStatus | "";
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: CategoryStatus | "") => void;
}

export default function CategoryFilters({
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
}: CategoryFiltersProps) {
  return (
    <div className="flex justify-end gap-3">
      <Select
        placeholder="Tất cả"
        style={{ width: "200px" }}
        value={statusFilter || undefined}
        onChange={(v) => onStatusFilterChange((v as CategoryStatus) || "")}
        options={[
          { value: "", label: "Tất cả" },
          { value: "active", label: "Hoạt động" },
          { value: "inactive", label: "Ngừng" },
        ]}
      />
      <Input
        placeholder="Tìm kiếm"
        style={{ width: "300px" }}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
