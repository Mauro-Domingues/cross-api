export class CreateJwtStrategy {
  public execute(): string {
    return `import type { PassportStatic } fr\u006Fm 'passport';
import passport fr\u006Fm 'passport';
import { Strategy as JwtStrategy } fr\u006Fm 'passport-jwt';
import { authConfig } fr\u006Fm '@config/auth';

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
