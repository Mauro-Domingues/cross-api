export class CreateEnsureAuthenticated {
  public execute(): string {
    return `import passport, { AuthenticateOptions } fr\om 'passport';
import { unless } fr\om 'express-unless';
import { Request, Response, NextFunction } fr\om 'express';
import { authConfig } fr\om '@config/auth';
import { jwtStrategy } fr\om './strategies/jwtStrategy';

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
