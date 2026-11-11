#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const input = process.argv[2] ?? resolve(process.cwd(), 'reference/Site-Movly-claude-export.html');
const output = process.argv[3] ?? resolve(process.cwd(), 'reference/claude-layout-source.html');

const raw = readFileSync(input, 'utf8');
const match = raw.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
if (!match) {
  console.error('Não encontrei <script type="__bundler/template"> em', input);
  process.exit(1);
}

let body = match[1].trim();
try {
  body = JSON.parse(body);
  if (typeof body !== 'string') body = body.html ?? String(body);
} catch {
  /* template já é HTML puro */
}

writeFileSync(output, body, 'utf8');
console.log('Extraído para', output, `(${body.length} caracteres)`);
