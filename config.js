require("dotenv").config();
const mysql = require("mysql2");

const urlDB = `mysql://root:GMkKaQnUZLFsnPjKMmUGmHMxIRGsOjoF@viaduct.proxy.rlwy.net:32479/railway`;
const connection = mysql.createConnection(urlDB);

module.exports = connection;
