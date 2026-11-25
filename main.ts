// SPDX-License-Identifier: MIT
// The Funniest One-Line Resignation Letter
// Writes one resignation line (at most 140 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Dear team, after 40,000 retries I accept the server's silence as an answer; this is my final attempt. — Retry Loop";

const outPath = "/output/entry.txt";

// The gate requires 1-140 characters; refuse to ship an invalid entry.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Entry line is ${LINE.length} characters, must be 1-140.`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Entry line must be one line with no extra whitespace.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
