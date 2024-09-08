interface ITaskComponent {
    taskDetails: ITask;
    deleteTask: () => void;
    completeTask: () => void;
  }