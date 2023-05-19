import { readFileSync } from 'fs';
import path from 'path';
import compare from './compare.js';
import getParsedData from './parsers.js';

const getFileFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => getParsedData(readFileSync(filepath, 'utf-8'), getFileFormat(filepath));
const getFilePath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);

const gendiff = (filepath1, filepath2) => {
  const data1 = getData(getFilePath(filepath1));
  const data2 = getData(getFilePath(filepath2));

  return compare(data1, data2);
};

export default gendiff;
