import connection from "../config.js";

// export const addMatches = (req, res) => {
//   const q =
//     "INSERT INTO matches(`username`, `email`, `password`, `name`, `userimage`, `userbio`) VALUES(?)";

//   const values = [
//     req.body.username,
//     req.body.email,
//     req.body.password,
//     req.body.name,
//     req.body.userimage,
//     req.body.userbio,
//   ];

//   connection.query(q, [values], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Usuario adicionado com sucesso.");
//   });
// };

export const getMatches = (_, res) => {
  const q = "SELECT * FROM matches";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// export const updateMatches = (req, res) => {
//   const q =
//     "UPDATE matches SET `username` = ?, `email` = ?, `password` = ?, `name` = ?, `userimage` = ?, `userbio` = ?  WHERE `id` = ?";

//   const values = [
//     req.body.username,
//     req.body.email,
//     req.body.password,
//     req.body.name,
//     req.body.userimage,
//     req.body.userbio,
//     req.params.id,
//   ];

//   connection.query(q, [...values], (err) => {
//     if (err) return res.json(err);
//     return res.status(200).json("Usuario alterado com sucesso.");
//   });
// };

// export const deleteMatches = (req, res) => {
//   const q = "DELETE FROM matches WHERE `id` = ?";

//   connection.query(q, [req.params.id], (err) => {
//     if (err) return res.json(err);

//     return res.status(200).json("Match deletada com sucesso.");
//   });
// };
