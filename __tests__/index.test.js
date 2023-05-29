import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedResult = readFile('expected_file.txt');

const cases = [
  ['file1.json', 'file2.json', 'stylish', expectedResult],
  ['file1.yaml', 'file2.yaml', 'stylish', expectedResult],
  ['file1.yml', 'file2.yml', 'stylish', expectedResult],
];

describe.each(cases)('', (case1, case2, format, expectedFile) => {
  test(`Gendiff test format ${format}`, () => {
    const result = gendiff(getFixturePath(case1), getFixturePath(case2), format, expectedFile);
    expect(result).toEqual(expectedFile);
  });
});
