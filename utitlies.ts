import { readFileSync } from "fs";

const newLineKey = "\n";

export function loadInputFile(path: string) {
  const file = readFileSync(path);

  return file
    .toString()
    .split(newLineKey)
    .filter((row) => row.length > 0);
}

