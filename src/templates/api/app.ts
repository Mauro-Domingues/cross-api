export class CreateApp {
  public execute(): string {
    return `import 'express-async-errors';
// import { uploadConfig } ${'from'} '@config/upload'; // uploadProvider
// import { cryptoConfig } ${'from'} '@config/crypto'; // cryptoProvider
import { CelebrateError } ${'from'} 'celebrate';
import cors ${'from'} 'cors';
import express, { Request, Response, NextFunction } ${'from'} 'express';
import { AppError } ${'from'} '@shared/errors/AppError';
import { corsConfig } ${'from'} '@config/cors';
import { createErrorLog } ${'from'} '@utils/errorLog';
import { parseParam } ${'from'} '@middlewares/parseParam';
import { routes } ${'from'} '../routes';
import '@shared/container';

const app = express();
app.use(cors(corsConfig));

// app.use('/files', express.static(uploadConfig.uploadsFolder)); // uploadProvider
// app.use('/keys', express.static(cryptoConfig.keysPath)); // expose public key feature

app.use(express.json());
app.use(parseParam);
app.use(routes);

app.use(
  (error: Error, _request: Request, response: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error instanceof CelebrateError && error.details) {
        const details =
          error.details.get('body') ||
          error.details.get('query') ||
          error.details.get('params');
        const message = details?.details
          .map(detail => detail.message)
          .join('. ');

        return (
          response.status(400).send({
            status: error.name,
            message,
          }) && createErrorLog(error, next)
        );
      }

      if (error instanceof AppError) {
        return (
          response.status(error.statusCode).send({
            status: 'AppError',
            message: error.message,
          }) && createErrorLog(error, next)
        );
      }

      return (
        response.status(500).send({
          status: error.name,
          message: error.message,
        }) && createErrorLog(error, next)
      );
    }

    return (
      response.status(500).send({
        status: 'error',
        message: 'Internal server error',
      }) && createErrorLog(error, next)
    );
  },
);

export { app };
`;
  }
}
