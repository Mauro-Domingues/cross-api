export class CreateErrorHandler {
  public execute(): string {
    return `import { AppError } ${'from'} '@shared/errors/AppError';
import { createErrorLog } ${'from'} '@utils/errorLog';
import { CelebrateError } ${'from'} 'celebrate';
import { Request, Response, NextFunction } ${'from'} 'express';

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
) {
  if (process.env.NODE_ENV !== 'production') {
    if (error instanceof CelebrateError && error.details) {
      const details =
        error.details.get('body') ||
        error.details.get('query') ||
        error.details.get('params');
      const message = details?.details.map(detail => detail.message).join('. ');

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
}
`;
  }
}
