import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "I told you the brakes were fine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Verify the saved epitaph byte-for-byte before printing anything, so a
// failed or partial write can never print a line that was not actually saved.
const saved = readFileSync("/output/entry.txt", "utf8");
if (saved !== line) {
  throw new Error("entry.txt does not match the epitaph line");
}
process.stdout.write(line + "\n");
