export class CreateServer {
  public execute(): string {
    return `import { app } ${'from'} './app';

app.init();
`;
  }
}
