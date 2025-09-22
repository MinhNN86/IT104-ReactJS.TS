import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDisPath } from "../../../hooks/useCustomRedux";
import { searchStudent } from "../../../slices/studentSearchSlices";

export default function Toolbar() {
  const [keyword, setKeyword] = useState<string>("");
  const dispatch = useAppDisPath();

  const handleSearch = () => {
    dispatch(searchStudent(keyword));
  };
  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary">
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
}
