export class CreateDefaultLanguage {
  execute(languageData) {
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
