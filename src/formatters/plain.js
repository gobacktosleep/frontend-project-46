import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return (_.isString(value)) ? `'${value}'` : value;
};

const plain = (node) => {
  const iter = (data, path = []) => {
    const result = data.flatMap((obj) => {
      const { key, type } = obj;
      const currentPath = [...path, key];

      switch (type) {
        case 'added':
          return `Property '${currentPath.join('.')}' was added with value: ${stringify(obj.value)}`;
        case 'deleted':
          return `Property '${currentPath.join('.')}' was removed`;
        case 'unchanged':
          return [];
        case 'nested':
          return iter(obj.children, currentPath);
        case 'changed':
          return `Property '${currentPath.join('.')}' was updated. From ${stringify(obj.value1)} to ${stringify(obj.value2)}`;
        default:
          throw new Error('Type is not defined.');
      }
    });

    return result.join('\n');
  };

  return iter(node);
};

export default plain;
