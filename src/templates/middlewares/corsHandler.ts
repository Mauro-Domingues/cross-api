export class CreateCorsHandler {
  public execute(): string {
    return `import cors fr\u006Fm 'cors';
import type { NextFunction, Request, Response } fr\u006Fm 'express';
import { unless } fr\u006Fm 'express-unless';
import { corsConfig } fr\u006Fm '@config/cors';
import { getExceptionOptions } fr\u006Fm '@utils/getExceptionOptions';

export const corsHandler = Object.assign(
  (request: Request, response: Response, next: NextFunction) =>
    cors(corsConfig)(request, response, next),
  { unless },
).unless(
  getExceptionOptions({
    paths: [
      {
        url: '/health',
        methods: ['GET'],
      },
    ],
  }),
);
`;
  }
}
