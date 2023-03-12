export class CreateExpressNamespace {
  public execute(): string {
    return `declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
`;
  }
}
