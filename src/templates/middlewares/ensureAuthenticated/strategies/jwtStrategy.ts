export class CreateJwtStrategy {
  public execute(): string {
    return `import type { PassportStatic } fr\om 'passport';
import passport fr\om 'passport';
import { Strategy as JwtStrategy } fr\om 'passport-jwt';
import { authConfig } fr\om '@config/auth';

export const jwtStrategy = (): PassportStatic => {
  return passport.use(
    new JwtStrategy(authConfig.config.jwt, (payload, done) => {
      return done(null, { sub: payload.sub });
    }),
  );
};
`;
  }
}
