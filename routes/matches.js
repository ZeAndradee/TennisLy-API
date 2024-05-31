import express from "express";

import {
  addMatches,
  deleteMatches,
  getMatches,
  updateMatches,
} from "../controllers/matches.js";

const router = express.Router();

router.post("/matches", addMatches);

router.get("/matches", getMatches);

router.put("/matches/:idmatch", updateMatches);

router.delete("/matches/:idmatch", deleteMatches);

export default router;
