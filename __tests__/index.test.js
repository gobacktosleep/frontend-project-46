import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('compare two JSON files', () => {
  const result = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const excpectedResult = readFile('expected_file.txt');
  expect(result).toEqual(excpectedResult);
});

test('compare two YAML files', () => {
  const result = gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));
  const excpectedResult = readFile('expected_file.txt');
  expect(result).toEqual(excpectedResult);
});
