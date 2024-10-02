import asyncHandler from "../utils/asyncHandler.js";

const addTask = asyncHandler(async (req, res) => {});

const updateTask = () => {};

const deleteTask = () => {};

const getTasks = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: "hello" });
});
export { addTask, updateTask, deleteTask, getTasks };
