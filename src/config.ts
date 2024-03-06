/*
 * This file to centralize the app's configuration options and its possible environment variables:
 */
import { name } from '../package.json';

const nodeEnv = process.env.NODE_ENV || 'development';

export type AppConfig = {
  app: string;
  nodeEnv: string;
};

export const config: AppConfig = {
  app: name,
  nodeEnv,
};
