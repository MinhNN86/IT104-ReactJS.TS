import { useEffect, useState } from "react";

type ToDoType = {
  id: number;
  name: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchToDo = (): void => {
    // Hiển thị loading
    setIsLoading(true);
    fetch("http://localhost:3000/todo", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  const handleAddTodo = async (): Promise<void> => {
    // Validate dữ liệu đầu vào
    //Thêm mới vào database khi dữ liệu thoả mãn
    //Trả về lỗi khi dữ liệu không thoả mãn'
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Build web app",
          completed: false,
        }),
      });
      console.log("Response: ", response);
      if (response.status === 201) {
        //Hiển thị thông báo
        alert("Thêm mới công việc thành công");
        // Load lại dữ liệu mới nhất
        fetchToDo();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (todo: ToDoType) => {
    //Thông báo xác nhận xoá
    const ifConfirmDelete = confirm(
      `Bạn có muốn xoá công việc ${todo.name} không`
    );
    //Nếu như đồng ý sẽ gọi API xoá dữ liệu
    if (ifConfirmDelete) {
      //Gọi API xoá công việc
      try {
        const response = await fetch(`http://localhost:3000/todo/${todo.id}`, {
          method: "DELETE",
        });
        if (response.status === 200) {
          // Hiển thị thông báo
          alert("Xoá công việc thành công");
          // Load lại dữ liệu
          fetchToDo();
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  const handleUpdate = async (todo: ToDoType) => {
    try {
      const respones = await fetch(`http://localhost:3000/todo/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Todo Updated", completed: true }),
      });
      if (respones.status === 200) {
        // Hiển thị thông báo
        alert("Cập nhật công việc thành công");
        // Load lại dữ liệu
        fetchToDo();
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>Id: {todo.id}</h2>
            <h2>Name: {todo.name}</h2>
            <h2>
              Completed: {todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
            </h2>
            <button onClick={() => handleUpdate(todo)}>Sửa</button>
            <button onClick={() => handleDelete(todo)}>Xoá</button>
          </li>
        ))}
      </ul>

      {isLoading && <div>Đang tải dữ liệu ...</div>}
    </div>
  );
}
