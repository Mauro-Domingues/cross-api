export default function createAuthConfig(): string {
  return `export default {
  jwtToken: {
    secret: process.env.TOKEN_SECRET || 'default',
    expiresIn: '1d',
  },
  RefreshToken: {
    secret: process.env.REFRESH_TOKEN_SECRET || 'default',
    expiresIn: '30d',
  },
};
`;
}
