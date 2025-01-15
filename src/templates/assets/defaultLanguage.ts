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
  get board() {
    return this.messages.board;
  }
  get language() {
    return this.messages.language;
  }
  get providers() {
    return this.messages.providers;
  }
  get modules() {
    return this.messages.modules;
  }
  get dependencies() {
    return this.messages.dependencies;
  }
  get documentation() {
    return this.messages.documentation;
  }
  get comands() {
    return this.messages.comands;
  }
  get mappers() {
    return this.messages.mappers;
  }
}
`;
  }
}
