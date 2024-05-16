import express from "express";
import { getUsers, addUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/users", addUsers);

export default router;
