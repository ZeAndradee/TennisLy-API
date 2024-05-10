import mysql from "mysql2";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const urlDB = `mysql://root:GMkKaQnUZLFsnPjKMmUGmHMxIRGsOjoF@viaduct.proxy.rlwy.net:32479/railway`;
const connection = mysql.createConnection(urlDB);

export default connection;
