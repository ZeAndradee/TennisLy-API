import multer from "multer";
import path from "path";
import connection from "../config.js";
import fs from "fs";

// Verifique se a pasta "uploads" existe, caso contrário, crie-a
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export const getPosts = (_, res) => {
  const q = "SELECT * FROM posts";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addPosts = (req, res) => {
  const q =
    "INSERT INTO posts(`postid`, `userid`, `postimage`, `postcontent`,`likes`) VALUES(?)";
  const values = [
    req.body.postid,
    req.body.userid,
    req.file
      ? `https://tennisly-api-1.onrender.com/uploads/${req.file.filename}`
      : null, // Salvando a URL da imagem
    req.body.postcontent,
    req.body.likes,
  ];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Post adicionado com sucesso");
  });
};

export const deletePost = (req, res) => {
  const q = "DELETE FROM posts WHERE `postid`= ?";

  connection.query(q, [req.params.postid], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Post deletado com sucesso");
  });
};
