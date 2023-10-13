export class CreateErrorHandler {
  public execute(): string {
    return `import { AppError } ${'from'} '@shared/errors/AppError';
import { createErrorLog } ${'from'} '@utils/errorLog';
import { CelebrateError } ${'from'} 'celebrate';
import { Request, Response, NextFunction } ${'from'} 'express';

const toUpperSnakeCase = (message: string): string => {
  return message
    .trim()
    .replace(/\\${'s+'}/g, '_')
    .replace(/[A-Z]/g, letter => \`_\${letter}\`)
    .replace(/^_/, '')
    .toUpperCase();
};

export const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  const errorBody = {} as Parameters<typeof createErrorLog>[0];

  if (error instanceof CelebrateError) {
    Object.assign(errorBody, {
      code: 400,
      message_code: toUpperSnakeCase(error.message),
      message:
        (
          error?.details.get('body') ||
          error?.details.get('query') ||
          error?.details.get('params')
        )?.details
          ?.map(detail => detail.message)
          .join('. ') ?? 'CelebrateError',
      stack: error.stack,
    });
  } else if (error instanceof AppError) {
    Object.assign(errorBody, {
      code: error.code,
      message_code: error.message_code,
      message: error.message,
      stack: error.stack,
    });
  } else {
    Object.assign(errorBody, {
      code: 500,
      message_code: toUpperSnakeCase(error.name),
      message: error.message,
      stack: error.stack,
    });
  }

  createErrorLog(errorBody);

  if (process.env.NODE_ENV === 'production') {
    Object.assign(errorBody, {
      message: 'Internal Server Error',
      code: 500,
    });
  }

  return (
    response.status(errorBody.code).send({
      code: errorBody.code,
      message_code: errorBody.message_code,
      message: errorBody.message,
    }) && next()
  );
};
`;
  }
}
