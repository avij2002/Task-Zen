import asyncHandler from "../utils/asyncHandler.js";
import { Task } from "../models/task.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const addTask = asyncHandler(async (req, res) => {
  const user = req.user;
  const { title } = req.body;

  const task = await Task.create({
    user,
    title
  });

  const taskCreated = await Task.findById(task._id);
  if (!taskCreated) {
    throw new ApiError(500, 'Internal Server Error');
  }

  return res.status(200)
    .json(new ApiResponse(201, 'Task Created Successfully', taskCreated));
});

const updateTask = asyncHandler(async (req, res) => {
  const userId = req?.user?._id;
  const { _id, title } = req?.body;

  const updatedTask = await Task.findByIdAndUpdate(
    {
      user: userId,
      _id: _id
    },
    {
      $set: {
        title, title
      }
    },
    { new: true }
  );

  return res.status(201)
    .json(new ApiResponse(201, "Task got updated successfully", updatedTask));

});

const deleteTask = asyncHandler(async (req, res) => {
  const userId = req?.user?._id;
  const { _id } = req?.body;

  const deletedTask = await Task.findByIdAndDelete({ _id: _id, user: userId });
  if (!deletedTask) {
    throw new ApiError(404, "Task not found");
  }

  return res.status(201)
    .json(new ApiResponse(201, "Task deleted successfully"));
});

const getTasks = asyncHandler(async (req, res) => {
  const userId = req?.user?._id;

  const tasks = await Task.find({ user: userId });

  return res.status(201)
    .json(new ApiResponse(201, "Task Reterived Successfully", tasks));

});
export { addTask, updateTask, deleteTask, getTasks };
