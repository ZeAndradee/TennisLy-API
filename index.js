import express from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
