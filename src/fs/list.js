import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFilesFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    const filesList = await fs.readdir(pathToFilesFolder);
    console.log(filesList);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
