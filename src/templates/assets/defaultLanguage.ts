export class CreateDefaultLanguage {
  public constructor(private readonly languageData: string) {}

  public execute(): string {
    return `export class Messages {
  constructor() {
    this.messages = ${this.languageData};
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
  get help() {
    return this.messages.help;
  }
  get mappers() {
    return this.messages.mappers;
  }
}
`;
  }
}
