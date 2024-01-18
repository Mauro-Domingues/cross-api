export class CreateDefaultLanguage {
  public execute(languageData: string): string {
    return `export class Messages {
    messages;
    constructor() {
      this.messages = ${languageData}
    }
    execute() {
      return this.messages;
    }
}
`;
  }
}
