import express from "express";
import { getUsers } from "../controllers/user.js";

const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
