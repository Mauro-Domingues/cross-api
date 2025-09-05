export class CreateEnsureAuthenticated {
  public execute(): string {
    return `import passport, { AuthenticateOptions } ${'from'} 'passport';
import { unless } ${'from'} 'express-unless';
import { Request, Response, NextFunction } ${'from'} 'express';
import { authConfig } ${'from'} '@config/auth';
import { jwtStrategy } ${'from'} './strategies/jwtStrategy';

jwtStrategy();

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user: Express.User, done) => done(null, user));

export const ensureAuthenticated = (
  strategy:
    | keyof typeof authConfig.config
    | Array<keyof typeof authConfig.config>,
  options?: AuthenticateOptions,
) => {
  return Object.assign(
    (request: Request, response: Response, next: NextFunction) =>
      passport.authenticate(strategy, {
        state: request.query.redirectUrl as string,
        failWithError: true,
        scope: ['email'],
        session: false,
        ...options,
      })(request, response, next),
    { unless },
  );
};
`;
  }
}
