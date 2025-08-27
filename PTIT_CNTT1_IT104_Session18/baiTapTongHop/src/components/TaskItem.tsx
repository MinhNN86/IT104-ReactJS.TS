import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../interfaces/task.interface";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.name);
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskItem must be used within a TaskContextProvider");
  }

  const { handleDeleteTask, handleToggleTask, handleUpdateTask } = taskContext;

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleToggle = () => {
    handleToggleTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editValue.trim()) {
      const updatedTask: Task = {
        ...task,
        name: editValue.trim(),
      };
      handleUpdateTask(task.id, updatedTask);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditValue(task.name);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleToggle}
            disabled={isEditing}
          />
          {isEditing ? (
            <form
              onSubmit={handleSaveEdit}
              className="d-flex align-items-center"
            >
              <input
                type="text"
                value={editValue}
                onChange={handleInputChange}
                className="form-control form-control-sm me-2"
                autoFocus
                onBlur={() => {
                  // Tự động lưu khi click ra ngoài
                  setTimeout(() => {
                    if (editValue.trim()) {
                      const updatedTask: Task = {
                        ...task,
                        name: editValue.trim(),
                      };
                      handleUpdateTask(task.id, updatedTask);
                    }
                    setIsEditing(false);
                  }, 100);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    handleCancelEdit();
                  }
                }}
              />
            </form>
          ) : (
            <span
              className={`task-name ${
                task.isCompleted ? "text-decoration-line-through" : ""
              }`}
            >
              {task.name}
            </span>
          )}
        </div>
        <div>
          {isEditing ? (
            <>
              <i
                onClick={() => {
                  if (editValue.trim()) {
                    const updatedTask: Task = {
                      ...task,
                      name: editValue.trim(),
                    };
                    handleUpdateTask(task.id, updatedTask);
                    setIsEditing(false);
                  }
                }}
                className="fas fa-check text-success me-3"
                role="button"
                title="Lưu"
              />
              <i
                onClick={handleCancelEdit}
                className="fas fa-times text-secondary me-3"
                role="button"
                title="Hủy"
              />
            </>
          ) : (
            <>
              <i
                onClick={handleEdit}
                className="fas fa-edit text-primary me-3"
                role="button"
                title="Sửa"
              />
              <i
                onClick={handleDelete}
                className="fas fa-trash text-danger"
                role="button"
                title="Xóa"
              />
            </>
          )}
        </div>
      </li>
    </>
  );
}
