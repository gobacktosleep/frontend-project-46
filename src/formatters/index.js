import stylish from './stylish.js';
import plain from './plain.js';

const formatDiff = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    default:
      throw new Error('Unknown format.');
  }
};

export default formatDiff;
