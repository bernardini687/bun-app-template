/*
 * This file to centralize the app's configuration options and its possible environment variables:
 */

import { name } from '../package.json';

const nodeEnv = process.env.NODE_ENV || 'development';
const logLevel = process.env.LOG_LEVEL || 'info';

export type AppConfig = {
  app: string;
  logLevel: string;
  nodeEnv: string;
};

export const config: AppConfig = {
  app: name,
  logLevel,
  nodeEnv,
};
