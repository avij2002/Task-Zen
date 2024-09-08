import { Divider } from "@mui/material";
import TodoListHeader from "./TaskListHeader/TodoListHeader";
import TaskListBody from "./TaskListBody/TaskListBody";

const TodoList = () => {
  return (
    <div className="todoList-container">
      <TodoListHeader />
      <Divider
        variant="middle"
        sx={{ marginTop: "20px", borderWidth: "1px" }}
      />
      <TaskListBody />
    </div>
  );
};

export default TodoList;
