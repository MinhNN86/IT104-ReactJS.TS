import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student_Ex03() {
  const [name, setName] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (): void => {
    setSearchParams({
      studentName: name,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khoá tìm kiếm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>Tên học sinh tìm kiếm: {searchParams.get("studentName")}</div>
    </div>
  );
}
