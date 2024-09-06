import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="h-[500px] w-[500px] ml-auto mr-auto p-4 shadow-lg">
        <TodoList />
      </div>
    </>
  );
}

export default App;
