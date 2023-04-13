"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthConfig = void 0;
class CreateAuthConfig {
    execute() {
        return `export interface IAuthConfigDTO {
  jwt: {
    expiresIn: string;
  };
}

export const authConfig: IAuthConfigDTO = {
  jwt: {
    expiresIn: process.env.JWT_LIFETIME || '1d',
  },
};
`;
    }
}
exports.CreateAuthConfig = CreateAuthConfig;
