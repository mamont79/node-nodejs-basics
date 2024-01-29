import { Transform } from "stream";

const reverseString = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      this.push(reversedChunk + "\n\n");
      callback();
    },
  });
};

const transform = async () => {
  const reverse = reverseString();

  process.stdout.write("Write something to reverse it \n");
  process.stdout.write("If you want to exit stream => 'ctrl+C' \n \n");

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
