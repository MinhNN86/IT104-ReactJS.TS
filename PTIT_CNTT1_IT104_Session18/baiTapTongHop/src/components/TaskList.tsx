import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../interfaces/task.interface";

export default function TaskList() {
  // Bước 3: Lấy giá trị từ context thông qua hook useContext
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskList must be used within a TaskContextProvider");
  }

  const { tasks } = taskContext;

  // Chỉ hiển thị các task chưa hoàn thành
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  if (incompleteTasks.length === 0) {
    return null; // Không hiển thị gì nếu không có task chưa hoàn thành
  }

  return (
    <>
      <ul className="list-group my-3">
        {incompleteTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
