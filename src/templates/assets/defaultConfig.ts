export class CreateDefaultConfig {
  public execute(): string {
    return `import { Messages } fr\om './messages.js';
import { Console } fr\om './console.js';
export class ConfigJson {
  constructor() {
    this.helpMessages = Messages.getInstance().help;
    this.console = Console.getInstance();
  }
  execute() {
    this.console.execute({
      message: this.helpMessages.description.configured,
      color: 'green',
      options: ['bold','breakStart','breakEnd'],
    });
  }
}
`;
  }
}
