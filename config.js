import mysql from "mysql2";

export function getDBConnection() {
  return mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    port: "32479",
    user: "root",
    password: "GMkKaQnUZLFsnPjKMmUGmHMxIRGsOjoF",
    database: "railway",
  });
}
