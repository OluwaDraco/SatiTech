import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { printSchema } from "graphql";
import { builder } from "../utils/builder.js";
import "./users.js";
import "./jobs.js";
import "./clients.js";
import "./sati_users.js";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = builder.toSchema({});

try {
    writeFileSync(resolve(__dirname, "../schema.graphql"), printSchema(schema));
    console.log("✅ Schema written to schema.graphql");
} catch (err) {
    console.error("❌ Failed to write schema:", err);
}
