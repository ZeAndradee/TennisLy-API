import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jara1975",
  database: "tennis-ly",
});
