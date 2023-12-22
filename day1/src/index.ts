import { join } from "node:path";
import { loadInputFile } from "../../utitlies";

function main() {
  const input = loadInputFile(join(__dirname, "..", "input", "input.txt"));

  const result = input
    .map(formTwoDigitNumber)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(`The result is ${result}`);
}

function formTwoDigitNumber(line: string): number {
  const numbers = line.split("").filter((character) => !isNaN(parseInt(character, 10)));
  return parseInt(`${numbers[0] ?? 0}${numbers[numbers.length - 1] ?? 0}`, 10);
}

main();
