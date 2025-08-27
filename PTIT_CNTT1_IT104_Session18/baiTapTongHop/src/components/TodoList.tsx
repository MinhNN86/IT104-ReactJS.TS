import TaskComplete from "./TaskComplete";
import TaskEmpty from "./TaskEmpty";
import TaskList from "./TaskList";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

export default function TodoList() {
  return (
    <>
      <div className="container todo-container">
        {/* Phần tiêu đề */}
        <TodoHeader />

        {/* Phần todoinput (lấy dữ liệu từ người dùng) */}
        <TodoInput />

        {/* Phần danh sách công việc */}
        <TaskList />

        {/* Hiển thị công việc hoàn thành */}
        <TaskComplete />

        {/* Hiển thị khi chưa có công việc */}
        <TaskEmpty />
      </div>
    </>
  );
}
