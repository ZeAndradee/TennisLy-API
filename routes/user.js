import express from "express";
import { getUsers, addUsers, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", addUsers);

router.delete("/users/:id", deleteUser);

export default router;
