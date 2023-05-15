import _ from 'lodash';

const compare = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const sortedAllKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedAllKeys.reduce((acc, key) => {
    if (!_.has(data1, key)) {
      acc.push(`  + ${key}: ${data2[key]}\n`);
    } else if (!_.has(data2, key)) {
      acc.push(`  - ${key}: ${data1[key]}\n`);
    } else if (data1[key] !== data2[key]) {
      acc.push(`  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}\n`);
    } else {
      acc.push(`    ${key}: ${data1[key]}\n`);
    }
    return acc;
  }, []);
  return `{\n${result.join('')}}`;
};

export default compare;
