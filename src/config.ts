import { name } from '../package.json';

const nodeEnv = process.env.NODE_ENV || 'development';

export type AppConfig = {
  app: string;
  logLevel: string;
  nodeEnv: string;
};

export const config: AppConfig = {
  app: name,
  logLevel: process.env.LOG_LEVEL || 'info',
  nodeEnv,
};
