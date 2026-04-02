export class CreateEnsureAuthenticated {
  public execute(): string {
    return `import type { NextFunction, Request, Response } fr\u006Fm 'express';
import { unless } fr\u006Fm 'express-unless';
import type { AuthenticateOptions } fr\u006Fm 'passport';
import passport fr\u006Fm 'passport';
import { authConfig } fr\u006Fm '@config/auth';
import { jwtStrategy } fr\u006Fm './strategies/jwtStrategy';

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
