import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const fileForCompress = path.join(__dirname, "files", "fileToCompress.txt");
  const resultOfCompress = path.join(__dirname, "files", "archive.gz");

  const inputFIleStream = fs.createReadStream(fileForCompress);
  const outputFIleStream = fs.createWriteStream(resultOfCompress);
  const gzipStream = zlib.createGzip();

  inputFIleStream.pipe(gzipStream).pipe(outputFIleStream);
};

await compress();
