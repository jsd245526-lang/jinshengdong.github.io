import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? collect(target) : [target];
  }));
  return groups.flat().filter((file) => /\.(js|css)$/.test(file));
}

const sourceRoot = fileURLToPath(new URL('../src', import.meta.url));
const files = await collect(sourceRoot);
const source = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n');

for (const forbidden of ['text-gradient', 'aurora-bg', 'glass-card', 'hover-lift']) {
  assert.equal(source.includes(forbidden), false, `legacy visual remains: ${forbidden}`);
}

assert.equal(/overflow-x:\s*hidden/.test(source), false, 'overflow masking remains');
assert.match(source, /prefers-reduced-motion/);
assert.match(source, /document\.documentElement\.lang\s*=/);
assert.match(source, /zh-CN/);
assert.match(source, /useReducedMotion/);
assert.match(source, /SectionIndex/);

console.log(`Design guard passed across ${files.length} source files.`);
