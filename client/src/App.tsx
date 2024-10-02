import "./App.css";
import TodoList from "./components/TaskList/TodoList";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <>
      <div className="h-[500px] w-[500px] ml-auto mr-auto p-4 shadow-lg">
        <TaskProvider>
          <TodoList />
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
