export class CreateErrorHandler {
  public execute(): string {
    return `import type { NextFunction, Request, Response } fr\u006Fm 'express';
import { createErrorResponse } fr\u006Fm '@utils/errorResponse';

export const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const errorResponse = createErrorResponse(error);

  response.status(errorResponse.code).json({
    code: errorResponse.code,
    messageCode: errorResponse.messageCode,
    message: errorResponse.message,
  });

  return next();
};
`;
  }
}
