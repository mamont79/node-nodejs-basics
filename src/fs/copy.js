import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFolder = path.join(__dirname, "files");
const targetFolder = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(sourceFolder, targetFolder, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
