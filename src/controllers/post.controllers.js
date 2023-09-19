import { PostModel } from "../models/Posts.js";


// Controlador para mostrar la vista
export const ctrlView = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    res.render("index.ejs", { posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Server",
    });
  }
};

//Controlador para traer todos los posts
export const ctrlGetPost = async (req, res) => {
  try {
    const post = await PostModel.findAll();
    if (!post) return res.status(404);
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para crear un post
export const ctrlCreatePost = async (req, res) => {
  try {
    const newPost = await PostModel.create(req.body);
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para modificar un post
export const ctrlUpdatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findByPk(id);

    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    post.update(req.body);

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Servidor",
    });
  }
};

//Controlador para eliminar un post
export const ctrlDeletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const postDeleted = await PostModel.destroy({
      where: {
        id: id,
      },
    });
    if (!postDeleted) {
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