export class CreateRateLimiter {
  public execute(): string {
    return `import { Request, Response, NextFunction } fr\om 'express';
import { RateLimiterMemory } fr\om 'rate-limiter-flexible';
import { AppError } fr\om '@shared/errors/AppError';

const limiter = new RateLimiterMemory({
  keyPrefix: 'ratelimiter',
  blockDuration: 30,
  duration: 1,
  points: 5,
});

export const rateLimiter = async (
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    if (
      !['/doc', '/uploads', '/keys'].some(route =>
        request.path.startsWith(route),
      )
    ) {
      await limiter.consume(request.ip as string, 1);
    }

    return next();
  } catch {
    throw new AppError(
      'TOO_MANY_REQUESTS',
      \`Too many requests with ip: "\${request.ip}"\`,
      429,
    );
  }
};
`;
  }
}
