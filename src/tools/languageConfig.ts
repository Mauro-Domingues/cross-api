import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Readline } from '@tools/readline';

interface ILanguageOptionsDTO {
  readonly 'pt-br': 'portuguese';
  readonly 'en-us': 'english';
}

export class ConfigLanguage {
  private readonly createDefaultLanguage: CreateDefaultLanguage;
  protected readonly languageOptions: ILanguageOptionsDTO;
  private readonly portugueseMessages: PortugueseMessages;
  protected languageChosen: keyof ILanguageOptionsDTO;
  private readonly englishMessages: EnglishMessages;
  protected readonly fileManager: FileManager;
  protected readonly readline: Readline;
  protected readonly console: Console;
  protected messages: IMessagesDTO;

  public constructor() {
    this.createDefaultLanguage = new CreateDefaultLanguage();
    this.portugueseMessages = new PortugueseMessages();
    this.englishMessages = new EnglishMessages();
    this.messages = new Messages().execute();
    this.languageOptions = Object.freeze({
      'pt-br': 'portuguese',
      'en-us': 'english',
    });
    this.fileManager = new FileManager();
    this.languageChosen = 'en-us';
    this.console = new Console();
    this.readline = new Readline(Object.keys(this.languageOptions));
  }

  private renderEmptyLine(): void {
    return this.console.single({
      message: '|                                     |   ',
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.multi([
      {
        message: ` /===================================\\   `,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: '|   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: `    KEY   `,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '       |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: `     VALUE   `,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '        |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: true,
      },
      {
        message: '| – – – – – – – – – – – – – – – – – – |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private renderOptions(): void {
    return Object.entries(this.languageOptions).forEach(([key, value]) => {
      this.console.multi([
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ` ➤  ${key.padEnd(12, ' ')}`,
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ' |   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: `  ${value.padEnd(18, ' ')}`,
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ' |   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.single({
      message: ` \\===================================/   `,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
  }

  protected renderLanguageOptions(): void {
    this.renderHeader();
    this.renderOptions();
    return this.renderFooter();
  }

  private showLanguageOptions(): void {
    this.renderLanguageOptions();
    return this.readline.execute(
      (optionChosen: keyof typeof this.languageOptions): void => {
        if (this.languageOptions[optionChosen]) {
          this.languageChosen = optionChosen;
          this.showChosenOption();
          this.setLanguageOption();
        } else {
          this.readline.invalidOption(optionChosen);
          this.execute();
        }
      },
    );
  }

  protected showChosenOption(): void {
    this.messages =
      this[`${this.languageOptions[this.languageChosen]}Messages`].execute();

    return this.console.single({
      message: `${this.messages.choice}${this.messages.language}`,
      color: 'green',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
  }

  protected setLanguageOption(): void {
    this.fileManager.truncateFileSync([
      'node_modules',
      'cross-api',
      'src',
      'tools',
      'messages.js',
    ]);
    return this.fileManager.createFile(
      ['node_modules', 'cross-api', 'src', 'tools', 'messages.js'],
      this.createDefaultLanguage.execute(
        JSON.stringify(this.messages, null, 2),
      ),
    );
  }

  public execute(): void {
    return this.showLanguageOptions();
  }
}
