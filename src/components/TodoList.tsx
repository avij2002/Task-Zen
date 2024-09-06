import { Divider } from "@mui/material";
import TodoListHeader from "./TodoListHeader";
import Task from "./Task/Task";

const TodoList = () => {
  return (
    <div className="todoList-container">
      <TodoListHeader />
      <Divider
        variant="middle"
        sx={{ marginTop: "20px", borderWidth: "1px" }}
      />
      <div id="todoList-body">
        <Task title="Task1" />
      </div>
    </div>
  );
};

export default TodoList;
