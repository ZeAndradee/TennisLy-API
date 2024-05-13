import { config as dotenvConfig } from "dotenv";
import mysql from "mysql2";

dotenvConfig();

const connection = mysql.createConnection(process.env.DATABASE_URL);
//teste
export default connection;
