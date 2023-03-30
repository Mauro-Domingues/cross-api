"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAuthConfig = void 0;
class CreateAuthConfig {
  execute() {
    return `interface IAuthConfig {
  jwt: {
    jwtSecret: string;
    refreshSecret: string;
    expiresIn: string;
  };
}

export default {
  jwt: {
    jwtSecret: process.env.JWT_TOKEN_SECRET || 'default',
    refreshSecret: process.env.REFRESH_TOKEN_SECRET || 'default',
    expiresIn: process.env.JWT_LIFETIME || '1d',
    refreshExpiresIn: process.env.REFRESH_LIFETIME || '7d',
  },
} as IAuthConfig;
`;
  }
}
exports.CreateAuthConfig = CreateAuthConfig;