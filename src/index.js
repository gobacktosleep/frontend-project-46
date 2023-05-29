import { readFileSync } from 'fs';
import path from 'path';
import compare from './compare.js';
import getParsedData from './parsers.js';
import formatDiff from './formatters/index.js';

const getFileFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => getParsedData(readFileSync(filepath, 'utf-8'), getFileFormat(filepath));
const getFilePath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(getFilePath(filepath1));
  const data2 = getData(getFilePath(filepath2));
  const diff = compare(data1, data2);

  return formatDiff(diff, format);
};

export default gendiff;
