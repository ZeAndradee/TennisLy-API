import express from "express";
import {
  getPosts,
  addPosts,
  deletePost,
  upload,
  updatePost,
} from "../controllers/post.js"; // Atualize o caminho conforme necessário

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", upload.single("image"), addPosts); // Usar o middleware de upload do Multer
router.delete("/posts/:postid", deletePost);
router.put("/posts/:postid", updatePost);
export default router;
