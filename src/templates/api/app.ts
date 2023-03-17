export class CreateApp {
  public execute(): string {
    return `import 'express-async-errors';
// import uploadConfig from '@config/upload'; // uploadProvider
import { errors } from 'celebrate';
import cors from 'cors';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import corsconfig from '@config/cors';
import ensureAuthenticated from '@middlewares/EnsureAuthenticated';
import routes from '../routes';
import '@shared/container';

const app = express();
app.use(cors(corsconfig));

// app.use('/files', express.static(uploadConfig.uploadsFolder)); // uploadProvider

app.use(express.static(path.resolve(__dirname, '..', 'assets'))); // expose public key feature
// protect routes through the exposed public key, use optional .unless to set non-protected routes
// app.use(ensureAuthenticated.unless({ path: ['/', '/example'] }));

app.use(express.json());
app.use(routes);

app.use(errors());
app.use(
  (error: Error, _request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return (
        response.status(error.statusCode).send({
          status: 'error',
          message: error.message,
        }) && next()
      );
    }

    if (process.env.NODE_ENV !== 'production') {
      return (
        response.status(500).send({
          status: error.name,
          message: error.message,
        }) && next()
      );
    }

    return (
      response.status(500).send({
        status: 'error',
        message: 'Internal server error',
      }) && next()
    );
  },
);

export default app;
`;
  }
}
