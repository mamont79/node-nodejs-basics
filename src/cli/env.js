import process from "process";

const parseEnv = () => {
  const envVars = Object.keys(process.env).filter((keyOfVar) =>
    keyOfVar.startsWith("RSS")
  );
  const rssVars = envVars
    .map((elem) => elem + "=" + process.env[elem])
    .join("; ");
  console.log(rssVars);
};

parseEnv();
