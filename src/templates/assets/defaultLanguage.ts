export class CreateDefaultLanguage {
  public execute(languageData: string): string {
    return `export class Messages {
  constructor() {
    this.messages = ${languageData};
  }
  static getInstance() {
    if (!Messages.instance) {
      Messages.instance = new Messages();
    }
    return Messages.instance;
  }
  execute() {
    return this.messages;
  }
}
`;
  }
}
