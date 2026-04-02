export class CreateServer {
  public execute(): string {
    return `import { app } fr\u006Fm './app';

setImmediate(app.init.bind(app));
`;
  }
}
