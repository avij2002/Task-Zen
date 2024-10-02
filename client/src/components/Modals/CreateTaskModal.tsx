import React, { useContext, useRef, useEffect } from "react";
import { Typography, Modal, Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TaskContext } from "../../contexts/TaskContext";

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CreateTaskModal = ({
  openCreateTaskModal,
  handleCreateTaskModalClose,
}: ICreateTaskModal) => {
  const enteredTask = useRef<HTMLInputElement | null>(null);
  const { tasks, setTasks } = useContext(TaskContext) ?? {
    tasks: [],
    setTasks: () => {},
  };

  const storeTaskToChromeStorage = (tasks: ITask[]) => {
    console.log(tasks)
    chrome.storage.sync.set({ task_zen_task: tasks }).then(() => {
      console.log("Tasks stored to Chrome storage");
    })
  };

  const handleAddTask = () => {
    const value = enteredTask?.current?.value || null;
    const task: ITask = {
      title: value || "",
      isCompleted: false,
    };
    if (value) {
      setTasks([...tasks, task]);
    }
    handleCreateTaskModalClose();
  };

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTask();
    }
  };

  useEffect(() => {
    storeTaskToChromeStorage(tasks);
  }, [tasks]);

  console.log(tasks);

  return (
    <>
      <Modal open={openCreateTaskModal} onClose={handleCreateTaskModalClose}>
        <Box className="modal-container rounded-md" sx={Modalstyle}>
          <Typography variant="h6">Create Task</Typography>
          <Box className="mt-[10px] flex gap-4 align-middle justify-between">
            <TextField
              id="filled-flexible"
              label="Write your task here"
              placeholder="Task"
              variant="filled"
              fullWidth
              inputRef={enteredTask}
              onKeyDown={handleOnKeyDown}
            />
            <IconButton
              size="large"
              onClick={handleAddTask}
              onKeyDown={handleOnKeyDown}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CreateTaskModal;
