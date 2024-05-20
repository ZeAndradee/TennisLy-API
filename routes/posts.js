import express from "express";
import { addPosts, deletePost, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);

router.post("/posts", addPosts);

router.delete("/posts/:postid", deletePost);

export default router;
