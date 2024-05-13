import express from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";
import connection from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM minha_tabela",
    function (error, results, fields) {
      if (error) {
        console.error("Erro ao fazer a consulta: " + error.stack);
        res.status(500).send("Erro ao fazer a consulta");
        return;
      }

      res.send(
        "Hello World! Aqui estão os resultados da sua consulta: " +
          JSON.stringify(results)
      );
    }
  );
});
// app.use("/", userRoutes);

app.listen(3000);
