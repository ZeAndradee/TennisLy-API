import mysql from "mysql2";

export function getDBConnection() {
  try {
    return mysql.createConnection({
      host: "viaduct.proxy.rlwy.net",
      port: "32479",
      user: "root",
      password: "GMkKaQnUZLFsnPjKMmUGmHMxIRGsOjoF",
      database: "railway",
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
