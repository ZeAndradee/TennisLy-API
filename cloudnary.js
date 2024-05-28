import { v2 as cloudinary } from "cloudinary";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const cloudinaryConnection = cloudinary.config(process.env.CLOUDINARY_URL);

export default cloudinaryConnection;
