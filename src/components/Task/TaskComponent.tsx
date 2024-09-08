import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";

const TaskComponent = ({
  taskDetails,
  deleteTask,
  completeTask,
}: ITaskComponent) => {
  const { title, isCompleted } = taskDetails;
  return (
    <div className="task-container border-2 w-[440px] mt-4 mx-auto rounded-lg flex items-center p-1 justify-between">
      <div className="flex items-center gap-1">
        <Checkbox
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={isCompleted}
          onClick={completeTask}
        />
        <Typography style={{textDecoration: isCompleted? "line-through" : ""}}>{title}</Typography>
      </div>
      <IconButton size="large" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TaskComponent;
