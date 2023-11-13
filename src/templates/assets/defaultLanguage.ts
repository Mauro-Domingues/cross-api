export class CreateDefaultLanguage {
  public execute(languageData: string): string {
    return `export class Messages {
  messages;
  public constructor() {
    this.messages = ${languageData}
  }
  execute() {
    return this.messages;
  }
}
`;
  }
}
