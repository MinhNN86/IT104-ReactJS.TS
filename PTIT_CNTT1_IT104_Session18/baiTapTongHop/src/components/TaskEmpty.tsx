import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskEmpty() {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskEmpty must be used within a TaskContextProvider");
  }

  const { tasks } = taskContext;

  // Chỉ hiển thị khi không có task nào
  if (tasks.length > 0) {
    return null;
  }

  return (
    <div className="text-center text-warning fw-medium">
      Chưa có công việc nào
    </div>
  );
}
