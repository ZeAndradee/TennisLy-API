import multer from "multer";
import path from "path";
import connection from "../config.js";
import cloudinaryConnection from "../cloudnary.js";
import fs from "fs";

// Verifique se a pasta "uploads" existe, caso contrário, crie-a
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.memoryStorage(); // Armazenar na memória ao invés de disco

const upload = multer({ storage: storage });

// Função para enviar imagem ao Cloudinary
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(fileBuffer);
  });
};

export const getPosts = (_, res) => {
  const q = "SELECT * FROM posts";

  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar post
export const addPosts = async (req, res) => {
  const { postid, userid, postcontent, likes } = req.body;

  let imageUrl = null;
  if (req.file) {
    try {
      // Enviar a imagem para o Cloudinary
      imageUrl = await uploadToCloudinary(req.file.buffer);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao enviar imagem para o Cloudinary" });
    }
  }

  const q =
    "INSERT INTO posts(`postid`, `userid`, `postimage`, `postcontent`,`likes`) VALUES(?)";
  const values = [postid, userid, imageUrl, postcontent, likes];

  connection.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Post adicionado com sucesso");
  });
};

export const updatePost = (req, res) => {
  const q =
    "UPDATE posts SET `userid` = ?, `postimage` = ?, `postcontent` = ?, `likes` = ?, `comments` = ?,  WHERE `postid` = ?";

  const values = [
    req.body.userid,
    req.body.postimage,
    req.body.postcontent,
    req.body.likes,
    req.body.comments,
    req.params.postid,
  ];

  connection.query(q, [...values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Post alterado com sucesso.");
  });
};

export const deletePost = (req, res) => {
  const q = "DELETE FROM posts WHERE `postid`= ?";

  connection.query(q, [req.params.postid], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Post deletado com sucesso");
  });
};

export { upload };
