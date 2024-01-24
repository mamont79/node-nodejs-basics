import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileToWritePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(fileToWritePath);
  const wordToExitStream = "exit";

  process.stdout.write("Write some information to fileToWrite \n");
  process.stdout.write(
    "If you want to exit stream => print 'exit' or 'ctrl+C' \n \n"
  );

  process.stdin.on("data", (chunk) => {
    let dataToWrite = chunk.toString().trim();
    if (dataToWrite.toLowerCase() == wordToExitStream) {
      process.stdin.pause();
      writeStream.end();
    } else {
      writeStream.write(chunk, (error) => {
        if (error) throw error;
      });
    }
  });
};

await write();
