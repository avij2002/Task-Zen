import { useEffect, useState } from "react";

const useGetTaskFromChromeStorage = () => {
  const [fetchedTasks, setFetchedTasks] = useState<ITask[]>([]);

  useEffect(() => {
    // Function to fetch tasks from Chrome storage
    const fetchTasks = () => {
      chrome.storage.sync.get("task_zen_task", (result) => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error fetching tasks from Chrome storage:",
            chrome.runtime.lastError.message
          );
          return;
        }

        const storedTasks = result.task_zen_task ?? []; // Get stored tasks or empty array
        setFetchedTasks(storedTasks); // Set fetched tasks to state
      });
    };

    fetchTasks();
  }, []); // Dependency array: empty to run only once on mount

  return fetchedTasks; // Return the fetched tasks
};

export default useGetTaskFromChromeStorage;
