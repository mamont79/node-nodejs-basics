import os from "os";
import path from "path";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerFile = path.join(__dirname, "worker.js");

const coresCount = os.availableParallelism();
const workersArr = [];
const resultArr = [];

const createWorkerThread = (num) => {
  return new Promise((resolve, reject) => {
    const workerThread = new Worker(workerFile);
    workersArr.push(workerThread);
    workerThread.postMessage(num);
    workerThread.on("message", (result) => {
      resolve(result);
    });
    workerThread.on("error", (error) => {
      console.log(error);
      reject(null);
    });
  });
};

const performCalculations = async () => {
  const startNum = 10;
  for (let i = 0; i < coresCount; i++) {
    resultArr.push(createWorkerThread(startNum + i));
  }

  const settlePromises = await Promise.allSettled(resultArr);
  const finalResult = settlePromises.map((item) => item.value);
  console.log(finalResult);
};

await performCalculations();
