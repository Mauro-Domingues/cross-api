export class CreateAuthConfig {
  public execute(): string {
    return `export interface IAuthConfigDTO {
  config: {
    jwt: {
      expiresIn: string;
    };
  };
}

export const authConfig: IAuthConfigDTO = {
  config: {
    jwt: {
      expiresIn: process.env.JWT_LIFETIME ?? '1d',
    },
  },
};
`;
  }
}
