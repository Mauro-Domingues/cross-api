import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Readline } from '@tools/readline';

export class ConfigLanguage {
  private readonly createDefaultLanguage: CreateDefaultLanguage;
  protected readonly languageOptions: IMessageDTO['languages'];
  protected languageChosen: keyof IMessageDTO['languages'];
  protected readonly fileManager: FileManager;
  protected readonly readline: Readline;
  protected readonly console: Console;
  private readonly languages: Record<
    keyof IMessageDTO['languages'],
    { execute: () => IMessageDTO }
  >;
  protected messages: IMessageDTO;

  public constructor() {
    this.createDefaultLanguage = new CreateDefaultLanguage();
    this.languages = {
      'en-us': new EnglishMessages(),
      'pt-br': new PortugueseMessages(),
    };
    this.messages = new Messages().execute();
    this.languageOptions = Object.freeze(this.messages.languages);
    this.fileManager = new FileManager();
    this.languageChosen = 'en-us';
    this.console = new Console();
    this.readline = new Readline(Object.keys(this.languageOptions));
  }

  private renderEmptyLine(): void {
    return this.console.single({
      message: `|${' '.repeat(37)}|`,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.multi([
      {
        message: ` /${'='.repeat(35)}\\`,
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
        message: `     ${this.messages.languageHeaders[0]}`.padEnd(17, ' '),
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '|   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: `      ${this.messages.languageHeaders[1]}`.padEnd(21, ' '),
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: true,
      },
      {
        message: `| ${'– '.repeat(18)}|`,
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
          message: ` ➤  ${key.padEnd(13, ' ')}`,
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: `  ${value.padEnd(19, ' ')}`,
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
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
      message: ` \\${'='.repeat(35)}/   `,
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
    this.messages = this.languages[this.languageChosen].execute();

    return this.console.single({
      message: `${this.messages.choice}${
        this.messages.languages[this.languageChosen]
      }`,
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
