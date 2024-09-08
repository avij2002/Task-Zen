import { useContext } from "react";
import TaskComponent from "../../Task/TaskComponent";
import { TaskContext } from "../../../contexts/TaskContext";

const TaskListBody = () => {
  const { tasks, setTasks } = useContext(TaskContext) ?? {
    tasks: [],
    setTasks: () => {},
  };

  const handleTaskDeletion = (index: number): void => {
    const updatedTasks: ITask[] = tasks.filter(
      (_, taskIndex) => taskIndex !== index
    );
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (index: number) => {
    const updatedTasks: ITask[] = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div id="todoList-body">
      {tasks.map((task, index) => (
        <TaskComponent
          key={index}
          taskDetails={task}
          deleteTask={() => handleTaskDeletion(index)}
          completeTask={() => handleCompleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskListBody;
