import chalk from "chalk";

// const yargs = require("yargs");

const params = process.argv[2];

const warning = chalk.hex("#FFA500").bgRedBright; // Orange color

const errorMsg = (msg) => {
  const error = chalk.bold.red;

  const warningMsg = error(msg);

  return warningMsg;
};

console.log(errorMsg("yams"));
// console.log(warningMsg);

console.log(process.argv);
// console.log(process.argv[2]);

if (params === "add") {
  console.log("Adding notes");
}

export { errorMsg };
