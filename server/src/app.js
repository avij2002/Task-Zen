import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

export { app, PORT };
