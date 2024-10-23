import { IMessageDTO } from '@interfaces/IMessageDTO';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage';
import { EnglishMessages } from '@templates/assets/enUs';
import { PortugueseMessages } from '@templates/assets/ptBr';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';
import { Readline } from '@tools/readline';

export class ConfigLanguage {
  protected declare languageChosen: keyof IMessageDTO['language']['options'];
  protected readonly languageOptions: IMessageDTO['language']['options'];
  private readonly createDefaultLanguage: CreateDefaultLanguage;
  protected readonly fileManager: FileManager;
  protected readonly readline: Readline;
  protected readonly console: Console;
  private readonly languages: Record<
    keyof IMessageDTO['language']['options'],
    { execute: () => IMessageDTO }
  >;
  private readonly concat: Concat;
  protected messages: IMessageDTO;

  public constructor() {
    this.messages = Messages.getInstance().execute();
    this.languageOptions = Object.freeze(this.messages.language.options);
    this.readline = new Readline(Object.keys(this.languageOptions));
    this.createDefaultLanguage = new CreateDefaultLanguage();
    this.fileManager = FileManager.getInstance();
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
    this.languages = {
      ptBr: new PortugueseMessages(),
      enUs: new EnglishMessages(),
    };
  }

  private get trace(): string {
    return String.fromCharCode(0x2013);
  }

  private renderEmptyLine(): void {
    return this.console.execute({
      message: ['|', ' '.repeat(37), '|'],
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.execute([
      {
        message: [' /', '='.repeat(35), '\\'],
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: [
          ' '.repeat(6),
          this.messages.language.headers.title.padEnd(11, ' '),
        ],
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
        breakEnd: false,
      },
      {
        message: [
          ' '.repeat(6),
          this.messages.language.headers.description.padEnd(13, ' '),
        ],
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
        message: [
          '|',
          ' ',
          this.concat.execute(this.trace, ' ').repeat(18),
          '|',
        ],
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private renderOptions(): void {
    return Object.entries(this.languageOptions).forEach(([key, value]) => {
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ['  ➤  ', key.padEnd(12, ' ')],
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: [' '.repeat(2), value.padEnd(17, ' ')],
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|',
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
    return this.console.execute({
      message: [' \\', '='.repeat(35), '/'],
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

    return this.console.execute({
      message: [
        this.messages.language.choice,
        this.messages.language.options[this.languageChosen],
      ],
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
