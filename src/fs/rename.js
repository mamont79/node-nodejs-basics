import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wrongFile = path.join(__dirname, "files", "wrongFilename.txt");
const properFile = path.join(__dirname, "files", "properFilename.md");

console.log(__dirname);

const rename = async () => {
  try {
    await fs.rename(wrongFile, properFile);
    console.log("File was renamed");
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
