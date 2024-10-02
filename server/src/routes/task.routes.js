import { Router } from "express";
import { getTasks } from "../controllers/task.controller.js";

const router = Router();

router.route("/getTasks").get(getTasks);
router.route("/addTask").post();

export default router;
