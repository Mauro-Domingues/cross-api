export class CreateDefaultConfig {
  public execute(): string {
    return `import { Messages } ${'from'} './messages.js';
import { Console } ${'from'} './console.js';
export class ConfigJson {
  constructor() {
    this.messages = Messages.getInstance().execute();
    this.console = Console.getInstance();
  }
  execute() {
    this.console.execute({
      message: this.messages.comands.description.configured,
      color: 'green',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
  }
}
`;
  }
}
