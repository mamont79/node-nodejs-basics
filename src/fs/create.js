import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");

console.log(filePath);

const create = async () => {
  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
    console.log("File was created");
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
