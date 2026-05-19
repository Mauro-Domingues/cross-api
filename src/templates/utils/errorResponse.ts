export class CreateErrorResponse {
  public execute(): string {
    return String.raw`import { CelebrateError } fr\u006Fm 'celebrate';
import { appConfig } fr\u006Fm '@config/app';
import { AppError } fr\u006Fm '@shared/errors/AppError';
import { createErrorLog } fr\u006Fm '@utils/errorLog';

const toUpperSnakeCase = (message: string): string => {
  return message
    .trim()
    .replaceAll(/\s+/g, '_')
    .replaceAll(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replaceAll(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toUpperCase();
};

export function createErrorResponse(
  error: unknown,
): Parameters<typeof createErrorLog>[0] {
  const errorResponse = {} as Parameters<typeof createErrorLog>[0];

  if (error instanceof CelebrateError) {
    Object.assign(errorResponse, {
      code: 422,
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
    Object.assign(errorResponse, {
      code: error.code,
      messageCode: toUpperSnakeCase(error.messageCode),
      message: error.message,
      stack: error.stack,
    });
  } else if (error instanceof Error) {
    Object.assign(errorResponse, {
      code: 500,
      messageCode: toUpperSnakeCase(error.name),
      message: error.message,
      stack: error.stack,
    });
  }

  createErrorLog(errorResponse);

  if (appConfig.config.apiMode === 'production') {
    Object.assign(errorResponse, {
      message: 'Internal Server Error',
      code: 500,
    });
  }

  return errorResponse;
}
`;
  }
}
