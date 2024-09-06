import { Typography, Button } from "@mui/material";

const TodoListHeader = () => {
  const addTaskClickHandler = () => {
    console.log("Add Task Clicked");
  };

  return (
    <div className="todoList-header flex justify-between">
      <Typography variant="h5">Todo's</Typography>
      <Button variant="outlined" size="small" onClick={addTaskClickHandler}>
        + Create Task
      </Button>
    </div>
  );
};

export default TodoListHeader;
