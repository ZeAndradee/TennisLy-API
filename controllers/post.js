import connection from "../config.js";

export const getPosts = (_, res) => {
  const q = "SELECT * FROM posts";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
