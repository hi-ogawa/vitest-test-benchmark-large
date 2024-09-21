import fs from "node:fs";
import path from "node:path";

async function main() {
  const NUM_CASES = Number(process.env.NUM_CASES ?? 2);
  const NUM_FILES = Number(process.env.NUM_FILES ?? 200);

  const baseDir = path.join(import.meta.dirname, "src");
  fs.rmSync(baseDir, { force: true, recursive: true });
  fs.mkdirSync(baseDir);

  let code = `import { bench } from 'vitest';\n`;
  for (let i = 0; i < NUM_CASES; i++) {
    code += `bench('case ${i}', () => {}, { iterations: 1_000_000, time: 0 });\n`;
  }

  for (let i = 0; i < NUM_FILES; i++) {
    fs.writeFileSync(path.join(baseDir, `${i}.bench.js`), code);
  }
}

main();
