import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskComplete() {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskComplete must be used within a TaskContextProvider");
  }

  const { tasks } = taskContext;
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const totalTasks = tasks.length;

  // Không hiển thị gì nếu không có task nào
  if (totalTasks === 0) {
    return null;
  }

  // Hiển thị thông báo khi chưa có công việc nào hoàn thành
  if (completedTasks.length === 0) {
    return (
      <div className="text-center text-danger fw-medium">
        Chưa có công việc nào hoàn thành
      </div>
    );
  }

  // Hiển thị số lượng công việc đã hoàn thành
  return (
    <div className="text-center text-success fw-medium">
      {completedTasks.length} / {totalTasks} công việc đã hoàn thành
      {completedTasks.length === totalTasks && (
        <div className="text-center text-success fw-bold mt-2">
          🎉 Tất cả công việc đã hoàn thành! 🎉
        </div>
      )}
    </div>
  );
}
