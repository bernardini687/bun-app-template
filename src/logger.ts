import pino from 'pino';
import { config } from './config';

const level = config.logLevel;

export const logger = pino({ level });
