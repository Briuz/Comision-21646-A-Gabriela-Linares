import { Router } from "express";
import { ctrlCreateTasks, ctrlDeleteTasks, ctrlGetTasks, ctrlUpdateTasks } from "../controllers/task.controllers.js";

const taskRouter = Router();

//endpoint para traer todas las tareas
taskRouter.get('/api/tasks', ctrlGetTasks)

//endpoint para crear una tareas
taskRouter.post('/api/tasks', ctrlCreateTasks)

//endpoint para modificar una tareas
taskRouter.put('/api/:id', ctrlUpdateTasks)

//endpoint para eliminar una tareas
taskRouter.delete('/api/:id', ctrlDeleteTasks)

export { taskRouter }