export class CreateDefaultConfig {
  public execute(): string {
    return `import { Messages } ${'from'} './messages.js';
import { Console } ${'from'} './console.js';
export class ConfigJson {
  constructor() {
    this.comandMessages = Messages.getInstance().comands;
    this.console = Console.getInstance();
  }
  execute() {
    this.console.execute({
      message: this.comandMessages.description.configured,
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
