import _ from 'lodash';

const replacer = ' ';
const defaultSpacesCount = 2;

const defaultIndent = replacer.repeat(defaultSpacesCount);

const setIndent = (depth, indent = 4) => replacer.repeat(indent * depth - defaultSpacesCount);

const stringify = (data, spacesCount) => {
  const iter = (currentValue, depth) => {
    if (!_.isPlainObject(currentValue)) {
      return String(currentValue);
    }

    const lines = Object.entries(currentValue)
      .map(([key, value]) => `${setIndent(depth + 1)}${defaultIndent}${key}: ${iter(value, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${setIndent(depth)}${defaultIndent}}`,
    ].join('\n');
  };
  return iter(data, spacesCount);
};

const stylish = (node) => {
  const iter = (data, depth) => data.map((obj) => {
    const { type, key, value } = obj;

    switch (type) {
      case 'added':
        return `${setIndent(depth)}+ ${key}: ${stringify(value, depth)}\n`;
      case 'deleted':
        return `${setIndent(depth)}- ${key}: ${stringify(value, depth)}\n`;
      case 'unchanged':
        return `${setIndent(depth)}${defaultIndent}${key}: ${stringify(value, depth)}\n`;
      case 'changed':
        return `${setIndent(depth)}- ${key}: ${stringify(obj.value1, depth)}\n${setIndent(depth)}+ ${key}: ${stringify(obj.value2, depth)}\n`;
      case 'nested':
        return `${setIndent(depth)}${defaultIndent}${key}: {\n${iter(obj.children, depth + 1).join('')}${setIndent(depth)}${defaultIndent}}\n`;
      default:
        throw new Error('Type is not defined.');
    }
  });
  return `{\n${iter(node, 1).join('')}}`;
};

export default stylish;
