export function createExpressNamespace(): string {
  return `declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
`;
}
