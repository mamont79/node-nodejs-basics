import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileToReadPath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(fileToReadPath);

  readStream.on("data", (data) => {
    process.stdout.write(data, (error) => {
      if (error) throw error;
    });
  });
};

await read();
