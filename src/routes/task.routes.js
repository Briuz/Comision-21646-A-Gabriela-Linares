import { Router } from "express";
import { ctrlCreateTasks, ctrlDeleteTasks, ctrlGetTasks, ctrlUpdateTasks } from "../controllers/task.controllers.js";
import { validator} from "../middlewares/validator.js";
import { TaskModel } from "../models/Tasks.js";

const taskRouter = Router();

//endpoint para traer todas las tareas
taskRouter.get('/api/tasks', ctrlGetTasks);

//endpoint para crear una tareas
taskRouter.post('/api/tasks', ctrlCreateTasks);

//endpoint para modificar una tareas
taskRouter.put('/api/tasks/:id', ctrlUpdateTasks);

//endpoint para eliminar una tareas
taskRouter.delete('/api/tasks/:id', ctrlDeleteTasks);

export { taskRouter };