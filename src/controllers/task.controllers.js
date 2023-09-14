import { TaskModel } from "../models/Tasks.js";


// Controlador para mostrar la vista
export const ctrlView = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll();
    res.render("index.ejs", { tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};

//Controlador para traer todos los posts
export const ctrlGetTasks = async (req, res) => {
  try {
    const task = await TaskModel.findAll();
    if (!task) return res.status(404);
    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para crear un post
export const ctrlCreateTask = async (req, res) => {
  try {
    const newTask = await TaskModel.create(req.body);
    return res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para modificar un post
export const ctrlUpdateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await TaskModel.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    task.update(req.body);

    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para eliminar un post
export const ctrlDeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskDeleted = await TaskModel.destroy({
      where: {
        id: id,
      },
    });
    if (!taskDeleted) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }
    return res.status(200).json({
      message: "Post eliminado",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};