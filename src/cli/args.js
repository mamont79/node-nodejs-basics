import process from "process";

const parseArgs = () => {
  const commandLineArgs = process.argv;
  for (let i = 2; i < commandLineArgs.length; i += 2) {
    let consoleArg = `${commandLineArgs[i].slice(2)} is ${
      commandLineArgs[i + 1]
    }`;
    console.log(consoleArg);
  }
};

parseArgs();
