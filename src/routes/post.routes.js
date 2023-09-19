import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPost, ctrlUpdatePost, ctrlView } from "../controllers/post.controllers.js";
import { createPostSchema, editPostSchema } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";
import { PostModel } from "../models/Posts.js";

const postRouter = Router();


// Ruta para ver los posts
postRouter.get("/posts", ctrlView);

// Endpoint para traer todos los posts
postRouter.get("/api/posts", ctrlGetPost);

// Endpoint para crear un post
postRouter.post("/api/posts", createPostSchema, validator, ctrlCreatePost);

// Endpoint para modificar un post
postRouter.put("/api/posts/:id", editPostSchema, validator, ctrlUpdatePost);

// Endpoint para eliminar un post
postRouter.delete("/api/posts/:id", ctrlDeletePost);

export { postRouter };