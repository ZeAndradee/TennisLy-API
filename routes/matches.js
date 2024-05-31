import express from "express";

import { getMatches } from "../controllers/matches.js";

const router = express.Router();

// router.post("/matches", addMatches);

router.get("/matches", getMatches);

// router.put("/matches/:id", updateMatches);

// router.delete("/matches/:id", deleteMatches);

export default router;
