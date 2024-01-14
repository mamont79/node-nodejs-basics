import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "fresh.txt");

  try {
    await fs.promises.access(filePath);
    console.error("FS operation failed");
  } catch (error) {
    fs.writeFile(
      filePath,
      "I am fresh and young",
      { overwrite: false },
      function (err) {
        if (err) throw err;
        console.log("fresh.txt was created");
      }
    );
  }
};

await create();
