// Import the 'fs' module to work with file system
import * as fs from "fs";

// Read the contents of the 'inputs.txt' file
let fileContent = fs.readFileSync("input.txt", "utf8");

// Split the content by new lines and convert each line to an integer
const inputs = fileContent
  .split("\n")
  .map((line: string) => parseInt(line, 10));

let sum = 0;
//0 + every number in input.txt
for (let i = 0; i < inputs.length; i++) {
  sum += inputs[i];
}
console.log(sum);
