import connection from "../config.js";

export const addMatches = (req, res) => {
  const q =
    "INSERT INTO matches(`idplayer1`, `idplayer2`, `sets`, `matchtime`, `fscorep1`, `fscorep2`, `set1p1`, `set1p2`, `set2p1`, `set2p2`, `set3p1`, `set3p2`, `set4p1`, `set4p2`, `set5p1`, `set5p2`, `content`) VALUES(?)";

  const values = [
    req.body.idplayer1,
    req.body.idplayer2,
    req.body.sets,
    req.body.matchtime,
    req.body.fscorep1,
    req.body.fscorep2,
    req.body.set1p1,
    req.body.set1p2,
    req.body.set2p1,
    req.body.set2p2,
    req.body.set3p1,
    req.body.set3p2,
    req.body.set4p1,
    req.body.set4p2,
    req.body.set5p1,
    req.body.set5p2,
    req.body.content,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Partida adicionada com sucesso.");
  });
};

export const getMatches = (_, res) => {
  const q = "SELECT * FROM matches";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateMatches = (req, res) => {
  const q =
    "UPDATE matches SET `idplayer1`= ?, `idplayer2`= ?, `sets`= ?, `matchtime`= ?, `fscorep1`= ?, `fscorep2`= ?, `set1p1`= ?, `set1p2`= ?, `set2p1`= ?, `set2p2`= ?, `set3p1`= ?, `set3p2`= ?, `set4p1`= ?, `set4p2`= ?, `set5p1`= ?, `set5p2`= ?, `content`= ?  WHERE `idmatch` = ?";

  const values = [
    req.body.idplayer1,
    req.body.idplayer2,
    req.body.sets,
    req.body.matchtime,
    req.body.fscorep1,
    req.body.fscorep2,
    req.body.set1p1,
    req.body.set1p2,
    req.body.set2p1,
    req.body.set2p2,
    req.body.set3p1,
    req.body.set3p2,
    req.body.set4p1,
    req.body.set4p2,
    req.body.set5p1,
    req.body.set5p2,
    req.body.content,
    req.params.idmatch,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Partida alterada com sucesso.");
  });
};

export const deleteMatches = (req, res) => {
  const q = "DELETE FROM matches WHERE `idmatch` = ?";

  connection.query(q, [req.params.idmatch], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Partida deletada com sucesso.");
  });
};
