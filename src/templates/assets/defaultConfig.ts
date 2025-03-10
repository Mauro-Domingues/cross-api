export class CreateDefaultConfig {
  public execute(): string {
    return `import { Messages } ${'from'} './messages.js';
import { Console } ${'from'} './console.js';
export class ConfigJson {
  constructor() {
    this.helpMessages = Messages.getInstance().help;
    this.console = Console.getInstance();
  }
  execute() {
    this.console.execute({
      message: this.helpMessages.description.configured,
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
