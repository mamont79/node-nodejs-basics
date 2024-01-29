import path from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const childScriptFile = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(childScriptFile, args);
};

spawnChildProcess([
  "--arg1",
  "value1",
  "--nodeArg",
  "no-no-no",
  "--hope",
  "hopeless",
]);
