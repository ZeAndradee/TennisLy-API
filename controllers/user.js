import connection from "../config.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM user";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
