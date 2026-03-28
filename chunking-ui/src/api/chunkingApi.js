import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export async function processFiles(files, config) {
  const form = new FormData();

  for (const file of files) {
    form.append('files', file);
  }

  form.append('strategy', config.strategy ?? 'FixedSize');
  form.append('chunkSize', String(config.chunkSize ?? 500));
  form.append('overlap', String(config.overlap ?? 50));
  form.append('splitBy', config.splitBy ?? 'paragraph');

  if (config.llmApiKey) form.append('llmApiKey', config.llmApiKey);
  if (config.llmModel) form.append('llmModel', config.llmModel);
  if (config.regexPattern) form.append('regexPattern', config.regexPattern);

  const response = await axios.post(`${BASE_URL}/chunk/upload-and-process`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
}

export async function getStrategies() {
  const response = await axios.get(`${BASE_URL}/chunk/strategies`);
  return response.data;
}
