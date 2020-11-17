import path from 'path';

require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
});

import Db from './db';
import Server from './server';

import { logger } from './shared/Logger';
import AppError from './shared/AppError';
import ErrorHandler from './shared/ErrorHandler';

import conf from '../next.config';

const url = String(process.env.DB_URL || '');
const port = Number(process.env.PORT || 3000);

const dev = String(process.env.NODE_ENV) !== 'production';
const dir = path.join(__dirname, '../client');

const db = Db.getInstance();
const server = Server.getInstance({ dev, conf, dir });

const errorHandler = ErrorHandler.getInstance();

const startDb = async () => {
  await db.connect(url);
};

const startServer = async () => {
  await server.prepare();
  await server.start(port);
};

const bootstrap = async () => {
  try {
    await startDb();
    await startServer();
  } catch (err) {
    throw new AppError('Error starting server', err, false);
  }
};

bootstrap();

(process as NodeJS.EventEmitter).on(
  'unhandledRejection',
  (reason: string) => {
    throw reason;
  },
);

(process as NodeJS.EventEmitter).on(
  'uncaughtException',
  (error: Error) => {
    errorHandler.handleError(error);

    if (!errorHandler.isTrustedError(error)) {
      process.exit(1);
    }
  },
);

// commented due to weird logging behavior
// const shutdown = async () => {
//   logger.warn(
//     'SIGTERM signal received: closing HTTP server',
//   );

//   await server.close();

//   logger.warn('HTTP server closed');
// };

// (process as NodeJS.EventEmitter).on('SIGTERM', shutdown);
// (process as NodeJS.EventEmitter).on('SIGINT', shutdown);
