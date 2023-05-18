export class CreateExpressNamespace {
    execute() {
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
