import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../slices/taskSlice";

// Gọi API lấy dữ liệu
export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
  const response = await axios.get("http://localhost:3000/task");

  return response.data;
});

// Gọi API thêm mới dữ liệu
export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskRequest: Task) => {
    const response = await axios.post(
      "http://localhost:3000/task",
      taskRequest
    );

    return response.data;
  }
);

// Gọi API xoá dữ liệu
export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: string) => {
    await axios.delete(`http://localhost:3000/task/${id}`);

    return id;
  }
);
