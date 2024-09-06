import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";

interface ITask {
  title: string;
}

const Task = ({ title }: ITask) => {
  return (
    <div className="task-container border-2 w-[440px] mt-4 mx-auto rounded-lg flex items-center p-1 justify-between">
      <div className="flex items-center gap-1">
        <Checkbox
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <Typography>{title}</Typography>
      </div>
      <IconButton size="large">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Task;
