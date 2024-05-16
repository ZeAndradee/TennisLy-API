import connection from "../config.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUsers = (req, res) => {
  const q =
    "INSERT INTO users(`username`, `email`, `password`, `name`, `userimage`, `userbio`) VALUES(?)";

  const values = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.userimage,
    req.body.userbio,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario adicionado com sucesso.");
  });
};
