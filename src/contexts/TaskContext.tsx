import React, { createContext, useEffect } from "react";
import useGetTaskFromChromeStorage from "../customHooks/useGetTaskFromChromeStorage";

const TaskContext = createContext<ITaskContext | undefined>(undefined);

const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const fetchedTasks = useGetTaskFromChromeStorage();
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  useEffect(() => {
    if (fetchedTasks?.length > 0) {
      setTasks(fetchedTasks);
    }
  }, [fetchedTasks]);

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
