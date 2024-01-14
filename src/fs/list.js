import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    console.log(pathToFolder);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
