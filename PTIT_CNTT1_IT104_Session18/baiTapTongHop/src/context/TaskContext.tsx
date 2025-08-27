import { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { Task } from "../interfaces/task.interface";
import { taskReducer } from "../reducers/taskReducer";

interface TaskContextType {
  tasks: Task[];
  handleAddTask: (task: Task) => void;
  handleUpdateTask: (id: number | string, newTask: Task) => void;
  handleDeleteTask: (id: number | string) => void;
  handleToggleTask: (id: number | string) => void;
}

// Bước 1: Tạo context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

interface TaskContextProviderProps {
  children: ReactNode;
}

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleAddTask = (task: Task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleUpdateTask = (id: number | string, newTask: Task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...newTask, id },
    });
  };

  const handleDeleteTask = (id: number | string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const handleToggleTask = (id: number | string) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { id },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
        handleToggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
