import fs from 'fs';
import path from 'node:path';
import compare from './compare.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => JSON.parse(fs.readFileSync(filepath, 'utf-8'));

const gendiff = (filepath1, filepath2) => {
  const data1 = getData(getFilePath(filepath1));
  const data2 = getData(getFilePath(filepath2));

  return compare(data1, data2);
};

export default gendiff;
