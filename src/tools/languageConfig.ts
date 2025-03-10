import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import { IDocumentationDTO } from '@interfaces/IMessageDTO/IDocumentationDTO';
import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
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
  protected declare documentationMessages: IDocumentationDTO;
  protected declare dependencyMessages: IDependencyDTO;
  protected readonly fileManager: FileManager;
  protected declare helpMessages: IHelpDTO;
  protected declare messages: IMessageDTO;
  private languageMessages: ILanguageDTO;
  protected readonly readline: Readline;
  protected readonly console: Console;
  private readonly languages: Record<
    keyof IMessageDTO['language']['options'],
    { execute: () => IMessageDTO }
  >;
  private readonly concat: Concat;

  public constructor() {
    this.languageMessages = Messages.getInstance().language;
    this.languageOptions = Object.freeze(this.languageMessages.options);
    this.readline = new Readline(Object.keys(this.languageOptions));
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
      },
      {
        message: [
          ' '.repeat(6),
          this.languageMessages.headers.title.padEnd(11, ' '),
        ],
        color: 'green',
        bold: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
      },
      {
        message: [
          ' '.repeat(6),
          this.languageMessages.headers.description.padEnd(13, ' '),
        ],
        color: 'green',
        bold: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
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
        },
        {
          message: ['  ➤  ', key.padEnd(12, ' ')],
          color: 'yellow',
          bold: true,
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
        {
          message: [' '.repeat(2), value.padEnd(17, ' ')],
          color: 'white',
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
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
          return this.setLanguageOption();
        }
        this.readline.invalidOption(optionChosen);
        return this.execute();
      },
    );
  }

  protected showChosenOption(): void {
    this.messages = this.languages[this.languageChosen].execute();
    this.documentationMessages = this.messages.documentation;
    this.dependencyMessages = this.messages.dependencies;
    this.languageMessages = this.messages.language;
    this.helpMessages = this.messages.help;

    return this.console.execute({
      message: [
        this.languageMessages.choice,
        this.languageMessages.options[this.languageChosen],
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
      new CreateDefaultLanguage(
        JSON.stringify(this.messages, null, 2),
      ).execute(),
    );
  }

  public execute(): void {
    return this.showLanguageOptions();
  }
}
