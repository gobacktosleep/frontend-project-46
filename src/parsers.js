import yaml from 'js-yaml';

const getParsedData = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error('Unsupported file format.');
  }
};

export default getParsedData;
