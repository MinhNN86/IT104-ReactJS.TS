import { useEffect, useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import { Switch, Checkbox, Button, Input, notification, Modal } from "antd";
import { v6 as uuid } from "uuid";
import "./TodoList.css";

interface ToDoTypes {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoTypes[] | []>(
    JSON.parse(localStorage.getItem("toDoData") || "[]")
  );
  const [input, setInput] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [todoToDelete, setTodoToDelete] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("toDoData", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    const text = input.trim();
    if (!text) {
      notification.error({ message: "Không được để nhiệm vụ trống" });
      return;
    }

    if (isEditing) {
      setTodos(
        todos.map((todo: ToDoTypes) =>
          todo.id === editingId ? { ...todo, text: text } : todo
        )
      );
      setIsEditing(false);
      setEditingId("");
    } else {
      const newTask: ToDoTypes = {
        id: uuid(),
        text: text,
        completed: false,
      };
      setTodos([newTask, ...todos]);
    }
    setInput("");
  };

  const handleCheck = (id: string) => {
    setTodos(
      todos.map((todo: ToDoTypes) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id: string, text: string) => {
    setIsEditing(true);
    setEditingId(id);
    setInput(text);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingId("");
    setInput("");
  };

  const handleDelete = (id: string) => {
    setTodoToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete));
    setIsModalOpen(false);
    setTodoToDelete("");
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setTodoToDelete("");
  };

  return (
    <div className="todo-bg">
      <div className="todo-card">
        <h2 className="todo-title">Todo List</h2>
        <p className="todo-desc">Get things done, one item at a time.</p>

        {todos.map((task) => (
          <div className="todo-task-row " key={task.id}>
            <span
              className="todo-task-text"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.5 : 1,
                cursor: "pointer",
              }}
              onClick={() => handleEdit(task.id, task.text)}
            >
              {task.text}
            </span>
            <div className="todo-task-actions">
              <Checkbox
                style={{ marginRight: 16 }}
                checked={task.completed}
                onChange={() => handleCheck(task.id)}
              />
              <DeleteFilled
                className="todo-icon"
                onClick={() => handleDelete(task.id)}
              />
            </div>
          </div>
        ))}

        <div className="todo-toggle-row">
          <span className="todo-toggle-label">Move done items at the end?</span>
          <Switch />
        </div>

        <div className="todo-add-section">
          <span className="todo-add-label">
            {isEditing ? "Edit todo item" : "Add to the todo list"}
          </span>
          <div className="todo-add-form">
            <Input
              className="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button className="todo-add-btn" type="default" onClick={handleAdd}>
              {isEditing ? "UPDATE ITEM" : "ADD ITEM"}
            </Button>
            {isEditing && (
              <Button
                className="todo-cancel-btn"
                type="default"
                onClick={handleCancelEdit}
                style={{ marginLeft: 8 }}
              >
                CANCEL
              </Button>
            )}
          </div>
        </div>

        <Modal
          title="Xác nhận xóa"
          open={isModalOpen}
          onOk={confirmDelete}
          onCancel={cancelDelete}
          okText="Xóa"
          cancelText="Hủy"
          okButtonProps={{ danger: true }}
        >
          <p>Bạn có chắc chắn muốn xóa nhiệm vụ này không?</p>
        </Modal>
      </div>
    </div>
  );
}
