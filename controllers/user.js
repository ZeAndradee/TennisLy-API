import { getDBConnection } from "../config.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";
  const db = getDBConnection();

  db.query(q, (err, data) => {
    db.end();
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
