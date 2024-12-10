export class CreateRateLimiter {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { RateLimiterMemory } ${'from'} 'rate-limiter-flexible';
import { AppError } ${'from'} '@shared/errors/AppError';

const limiter = new RateLimiterMemory({
  keyPrefix: 'ratelimiter',
  blockDuration: 5,
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
    throw new AppError('TOO_MANY_REQUESTS', 'Too many requests', 429);
  }
};
`;
  }
}
