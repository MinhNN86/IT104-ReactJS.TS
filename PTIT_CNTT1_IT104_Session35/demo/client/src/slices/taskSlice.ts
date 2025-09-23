import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, getAllTask } from "../apis/task.api";

export type Task = {
  id?: "string";
  name: string;
  status: "inactive" | "active";
};

type TaskInitial = {
  status: "idle" | "pending" | "success" | "failed";
  data: Task[];
  error: undefined | string;
};

const initialState: TaskInitial = {
  status: "idle",
  data: [],
  error: undefined,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTask.pending, (state) => {
        // Ban đầu, khi gọi dữ liệu ở đây thì chưa có
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        // Trạng thái này đã có dữ liệu
        state.status = "success";
        // Cập nhật lại data cho state
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.data.push(action.payload); // Thêm dữ liệu vào trong mảng
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
