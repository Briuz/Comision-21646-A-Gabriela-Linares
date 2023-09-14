import { Router } from "express";
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask, ctrlView } from "../controllers/task.controllers.js";
import { createTaskSchema, editTaskSchema } from "../models/schemas/task.schema.js";
import { validator } from "../middlewares/validator.js";
import { TaskModel } from "../models/Tasks.js";

const taskRouter = Router();


// Ruta para ver los posts
taskRouter.get("/tasks", ctrlView);

// Endpoint para traer todos los posts
taskRouter.get("/api/tasks", ctrlGetTasks);

// Endpoint para crear un post
taskRouter.post("/api/tasks", createTaskSchema, validator, ctrlCreateTask);

// Endpoint para modificar un post
taskRouter.put("/api/tasks/:id", editTaskSchema, validator, ctrlUpdateTask);

// Endpoint para eliminar un post
taskRouter.delete("/api/tasks/:id", ctrlDeleteTask);

export { taskRouter };