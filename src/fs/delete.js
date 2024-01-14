import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathTORemoveFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.unlink(pathTORemoveFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
