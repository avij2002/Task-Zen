import React, { createContext } from "react";

const TaskContext = createContext<ITaskContext | undefined>(undefined);

const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
