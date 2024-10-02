import { useState } from "react";
import { Typography, Button } from "@mui/material";
import CreateTaskModal from "../../Modals/CreateTaskModal";

const TodoListHeader = () => {
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false);

  const addTaskClickHandler = () => {
    setOpenCreateTaskModal(true);
  };

  const handleCreateTaskModalClose = () => {
    setOpenCreateTaskModal(false);
  };

  return (
    <div className="todoList-header flex justify-between">
      <Typography variant="h5">Todo's</Typography>
      <Button variant="outlined" size="small" onClick={addTaskClickHandler}>
        + Create Task
      </Button>
      <CreateTaskModal
        openCreateTaskModal={openCreateTaskModal}
        handleCreateTaskModalClose={handleCreateTaskModalClose}
      />
    </div>
  );
};

export default TodoListHeader;
