import express from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/", userRoutes);

app.listen(3000);
