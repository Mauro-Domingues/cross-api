export default function createApp(): string {
  return `import 'express-async-errors';
import DomainsManager from 'utils/domainsManager';

// import uploadConfig from '@config/upload'; // uploadProvider
import { errors } from 'celebrate';
import cors, { CorsOptions } from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

import routes from '../routes';

import '@shared/container';

const app = express();

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (origin && new DomainsManager().read().indexOf(origin) !== -1) {
      callback(null, true);
    } else if (
      process.env.NODE_ENV === 'test' ||
      process.env.NODE_ENV === 'development'
    ) {
      callback(new Error(\`\${origin} not allowed by CORS\`));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use('/files', express.static(uploadConfig.uploadsFolder)); // uploadProvider
app.use(routes);

app.use(errors());

app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  if (process.env.NODE_ENV !== 'production') {
    return response.status(500).json({
      status: error.name,
      message: error.message,
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
