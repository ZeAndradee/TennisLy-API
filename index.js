import express from "express";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", postRoutes);

app.listen(3000);
