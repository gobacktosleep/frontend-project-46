import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('compare two files', () => {
  const result = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const excpectedResult = readFile('expected_file.txt');
  expect(result).toEqual(excpectedResult);
});