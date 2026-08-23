import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = join(process.cwd());

const readFile = (relativePath) => readFileSync(join(projectRoot, relativePath), 'utf8');

test('project exposes the required agentic endpoints and files', () => {
  const filesToCheck = [
    'src/app/llms.txt',
    'src/app/robots.ts',
    'src/app/sitemap.ts',
    'src/app/not-found.tsx',
    'src/app/contact/page.tsx',
    'src/app/privacy/page.tsx',
    'src/app/.well-known/mcp/route.ts',
  ];

  for (const filePath of filesToCheck) {
    assert.doesNotThrow(() => readFile(filePath), `${filePath} should exist`);
  }
});

test('llms.txt contains product guidance and developer resources', () => {
  const llms = readFile('src/app/llms.txt');

  assert.match(llms, /AbdullahDigital/i);
  assert.match(llms, /when to use/i);
  assert.match(llms, /contact|api|openapi|mcp|developer/i);
});

test('home page content retains a visible H1 and descriptive text', () => {
  const homePage = readFile('src/app/page.tsx');

  assert.match(homePage, /<h1|h1>/i);
  assert.match(homePage, /AbdullahDigital|Full-Stack|Cybersecurity|AI/i);
});

test('organization schema includes contactPoint and address information', () => {
  const layoutSource = readFile('src/app/layout.tsx');

  assert.match(layoutSource, /contactPoint/i);
  assert.match(layoutSource, /PostalAddress/i);
  assert.match(layoutSource, /Organization/i);
});
