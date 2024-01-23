import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileForHashCalc = path.join(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const hashOfFile = createHash("sha256");
  const fileHashStream = fs.createReadStream(fileForHashCalc);

  fileHashStream.on("data", (data) => {
    hashOfFile.update(data);
  });

  fileHashStream.on("end", () => {
    const calculatedHash = hashOfFile.digest("hex");
    console.log(`hash of file is:   ${calculatedHash}`);
  });
};

await calculateHash();
