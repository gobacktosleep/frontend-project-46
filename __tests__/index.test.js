import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  ['file1.json', 'file2.json', 'stylish', 'expected_file.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'expected_file.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'expected_file.txt'],
  ['file1.yaml', 'file2.yml', 'stylish', 'expected_file.txt'],
  ['file1.json', 'file2.yaml', 'stylish', 'expected_file.txt'],
  ['file1.json', 'file2.json', 'plain', 'expected_plain.txt'],
  ['file1.json', 'file2.yaml', 'plain', 'expected_plain.txt'],
  ['file1.yml', 'file2.json', 'plain', 'expected_plain.txt'],
  ['file1.yml', 'file2.json', 'json', 'expected_json.txt'],
];

describe.each(cases)('Gendiff tests', (case1, case2, format, expectedFile) => {
  test(`test for ${case1} & ${case2} with formatter ${format}`, () => {
    const result = gendiff(
      getFixturePath(case1),
      getFixturePath(case2),
      format,
      readFile(expectedFile),
    );
    expect(result).toEqual(readFile(expectedFile));
  });
});
