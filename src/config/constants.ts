const fetchVariable = (varName: string, defaultValue?: string) => {
  if (!process.env[varName] && typeof defaultValue === 'undefined') {
    throw new Error(`Mandatory environment variable ${varName} is not set.`);
  }
  return process.env[varName] || defaultValue;
};

const nodeEnv = fetchVariable('NODE_ENV');
const environment = {
  isDevelopment: nodeEnv === 'development',
  isProduction: nodeEnv === 'production',
};

export const constants = {
  apiBaseURL: fetchVariable('REACT_APP_API_BASE_URL', 'REPLACE ME'),
  apiPort: fetchVariable('REACT_APP_PORT', ''),
  appID: fetchVariable('REACT_APP_ID', ''),
  publicKey: fetchVariable('REACT_APP_PUBLIC_KEY', ''),

  environment,
};
