import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

export { app, PORT };
