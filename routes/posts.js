import express from "express";
import { addPosts, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/posts", getPosts);

router.post("/posts", addPosts);

export default router;
