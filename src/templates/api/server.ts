export class CreateServer {
  public execute(): string {
    return `import { app } fr\om './app';

setImmediate(app.init.bind(app));
`;
  }
}
