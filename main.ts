import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns the review form on its head: the reviewer promotes the
// operator downward, into the reviewer's own job.
const line =
  "Exceeds expectations at creating work, meets expectations at understanding it, and is hereby promoted to my assistant.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
