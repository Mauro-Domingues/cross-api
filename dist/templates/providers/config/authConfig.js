export class CreateAuthConfig {
    execute() {
        return `export interface IAuthConfigDTO {
  jwt: {
    expiresIn: string;
  };
}

export const authConfig: IAuthConfigDTO = {
  jwt: {
    expiresIn: process.env.JWT_LIFETIME ?? '1d',
  },
};
`;
    }
}
