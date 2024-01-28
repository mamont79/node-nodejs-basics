import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on("message", (num) => {
    let resultMessage = {
      status: "error",
      data: null,
    };

    if (typeof num === "number" && num > 0) {
      resultMessage = {
        status: "resolved",
        data: nthFibonacci(num),
      };
    }
    parentPort.postMessage(resultMessage);
    parentPort.close();
  });
};

sendResult();
