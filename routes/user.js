import express from "express";
import { getUsers } from "../controllers/user.js";
import { getDBConnection } from "../config.js";

getDBConnection();
const router = express.Router();
router.get("/", getUsers);

export default router;
