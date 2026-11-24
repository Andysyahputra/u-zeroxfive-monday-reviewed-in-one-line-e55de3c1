import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Monday, Reviewed in One Line: a one-star product review of the day,
// with one concrete detail per grievance and the twist at the end.
const LINE =
  "Monday, one star: the 9 a.m. standup ran 40 minutes, the lift died between floors, and my inbox held 87 'urgent' emails from people who left at five.";

// Guard the sealed gate at build time: exactly one line, 1-200 chars.
if (!LINE || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
