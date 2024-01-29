import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const fileForDecompress = path.join(__dirname, "files", "archive.gz");
  const resultOfDecompress = path.join(
    __dirname,
    "files",
    "fileToCompress.txt"
  );

  const inputFIleStream = fs.createReadStream(fileForDecompress);
  const outputFIleStream = fs.createWriteStream(resultOfDecompress);
  const gunzipStream = zlib.createGunzip();

  inputFIleStream.pipe(gunzipStream).pipe(outputFIleStream);
};

await decompress();
