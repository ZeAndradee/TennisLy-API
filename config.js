import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";

const dbUrl = url.parse(process.env.DATABASE_URL);
const [user, password] = dbUrl.auth.split(":");

const connection = mysql.createConnection({
  host: dbUrl.hostname,
  port: dbUrl.port,
  user: user,
  password: password,
  database: dbUrl.pathname.substr(1), // remove the leading '/'
});

export default connection;
