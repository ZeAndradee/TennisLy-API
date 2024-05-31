import express from "express";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import matchesRoutes from "./routes/matches.js";
import path from "path";
import cors from "cors";

const app = express();

// Middleware para servir arquivos estáticos da pasta uploads
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", matchesRoutes);

app.listen(3000);
