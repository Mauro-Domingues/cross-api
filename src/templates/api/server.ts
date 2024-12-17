export class CreateServer {
  public execute(): string {
    return `import { app } ${'from'} './app';

setImmediate(app.init.bind(app));
`;
  }
}
