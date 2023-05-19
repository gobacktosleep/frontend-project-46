import yaml from 'js-yaml';

const getParsedData = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yaml' || format === 'yml') {
    return yaml.load(data);
  }
  throw new Error('Unsupported file format');
};

export default getParsedData;
