export default function createApp(): string {
  return `import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

import routes from '../routes';

import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (process.env.NODE_ENV !== 'production') {
    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
`;
}
