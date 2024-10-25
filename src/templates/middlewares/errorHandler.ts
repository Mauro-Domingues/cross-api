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
): void => {
  const errorBody = {} as Parameters<typeof createErrorLog>[0];

  if (error instanceof CelebrateError) {
    Object.assign(errorBody, {
      code: 400,
      messageCode: toUpperSnakeCase(error.message),
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
      messageCode: error.messageCode,
      message: error.message,
      stack: error.stack,
    });
  } else {
    Object.assign(errorBody, {
      code: 500,
      messageCode: toUpperSnakeCase(error.name),
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
      messageCode: errorBody.messageCode,
      message: errorBody.message,
    }) && next()
  );
};
`;
  }
}
