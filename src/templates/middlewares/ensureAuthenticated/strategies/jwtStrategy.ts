export class CreateJwtStrategy {
  public execute(): string {
    return `import passport, { PassportStatic } ${'from'} 'passport';
import { Strategy as JwtStrategy } ${'from'} 'passport-jwt';
import { authConfig } ${'from'} '@config/auth';

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
