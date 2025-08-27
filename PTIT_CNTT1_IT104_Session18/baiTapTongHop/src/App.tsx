import TaskContextProvider from "./context/TaskContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TaskContextProvider>
      <TodoList />
    </TaskContextProvider>
  );
}

export default App;
