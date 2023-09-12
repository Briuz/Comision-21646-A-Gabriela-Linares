import { TaskModel } from "../models/Tasks.js"


//controlador para traer todas las tareas
export const ctrlGetTasks = async (req, res) => {
    try {
        const task = await TaskModel.findAll();
        if(!task) return res.status(404)
        return res.status(200).json(task)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

//controlador para crear una tarea
export const ctrlCreateTasks = async (req, res) => {
    try {
        const newTask = await TaskModel.create(req.body)
        return res.status(201).json(newTask)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        }) 
    }
}

//controlador para modificar una tarea
export const ctrlUpdateTasks = (req, res) => {

}

//controlador para eliminar una tarea
export const ctrlDeleteTasks = (req, res) => {

}
