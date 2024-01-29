import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToReadFile = path.join(__dirname, "files", "fileToRead.txt");

console.log(pathToReadFile);

const read = async () => {
  try {
    const data = await fs.readFile(pathToReadFile, "utf8");
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
