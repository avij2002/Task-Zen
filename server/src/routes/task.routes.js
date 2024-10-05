import { Router } from "express";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller.js";
import { verifyLoggedInUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/addTask").post(verifyLoggedInUser, addTask);
router.route("/getTasks").get(verifyLoggedInUser, getTasks);
router.route("/updateTask").post(verifyLoggedInUser, updateTask);
router.route("/deleteTask").post(verifyLoggedInUser, deleteTask);

export default router;
