import { cpSync, readdirSync, renameSync, rmSync, existsSync } from "fs";
import { join, extname } from "path";

const SRC = "dist";
const DEST = "dist-php";

if (existsSync(DEST)) rmSync(DEST, { recursive: true });
cpSync(SRC, DEST, { recursive: true });

function renameHtmlToPhp(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			renameHtmlToPhp(fullPath);
		} else if (extname(entry.name) === ".html") {
			const newPath = fullPath.replace(/\.html$/, ".php");
			renameSync(fullPath, newPath);
			console.log(`  ${fullPath} → ${newPath}`);
		}
	}
}

console.log(`\n[to-php] ${SRC}/ → ${DEST}/ (.html → .php)\n`);
renameHtmlToPhp(DEST);
console.log("\n[to-php] 완료\n");
