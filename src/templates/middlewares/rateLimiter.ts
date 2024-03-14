export class CreateRateLimiter {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { RateLimiterRedis } ${'from'} 'rate-limiter-flexible';
import { Redis } ${'from'} 'ioredis';
import { AppError } ${'from'} '@shared/errors/AppError';
import { cacheConfig } ${'from'} '@config/cache';

const redisClient = new Redis({
  ...cacheConfig.config.redis,
  enableOfflineQueue: false,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  blockDuration: 600,
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
      !['/api-docs', '/uploads', '/keys'].some(route =>
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
