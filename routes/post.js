import express from "express";
import { addPosts, deletePost, getPosts } from "../controllers/post.js";
import multer from "multer";
import path from "path";

// Configuração do Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/posts", getPosts);

router.post("/posts", upload.single("postimage"), addPosts);

router.delete("/posts/:postid", deletePost);

export default router;
