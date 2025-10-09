export class CreateExpressNamespace {
  public execute(): string {
    return `declare namespace Express {
  export interface Request {
    dbConnection: import('@shared/typeorm').IConnection;
    readonly user: {
      readonly email: string;
      readonly sub: string;
    };
  }
}
`;
  }
}
