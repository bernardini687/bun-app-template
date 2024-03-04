import { config } from '../config';
import { logger } from '../logger';

export function start() {
  logger.info(`hello from ${config.app}`);
  logger.debug({ config });
}
