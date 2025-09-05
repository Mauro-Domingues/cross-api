export class CreateExpressNamespace {
  public execute(): string {
    return `declare namespace Express {
  export interface Request {
    readonly user: {
      readonly email: string;
      readonly sub: string;
    };
  }
}
`;
  }
}
