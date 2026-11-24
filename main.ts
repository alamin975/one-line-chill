// One Line, One Chill — a single sentence of horror, byte-for-byte.
const LINE = "I heard my own voice call my name from the basement, and I live alone.";

import { mkdirSync, writeFileSync } from "node:fs";

// Keep LINE byte-for-byte: one horror sentence, single line, no trailing newline.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
