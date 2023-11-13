import { createInterface } from 'readline';

import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export interface ILanguageOptionsDTO {
  'en-us': 'englishMessages';
  'pt-br': 'portugueseMessages';
}

interface ILanguageConfigDTO {
  option: keyof ILanguageOptionsDTO;
  index: number;
}

export class ConfigLanguage {
  private readonly createDefaultLanguage: CreateDefaultLanguage;
  protected readonly languageOptions: ILanguageOptionsDTO;
  private readonly portugueseMessages: PortugueseMessages;
  private readonly englishMessages: EnglishMessages;
  protected languageConfig: ILanguageConfigDTO;
  protected readonly fileManager: FileManager;
  protected readonly console: Console;
  protected messages: IMessagesDTO;

  public constructor() {
    this.createDefaultLanguage = new CreateDefaultLanguage();
    this.portugueseMessages = new PortugueseMessages();
    this.englishMessages = new EnglishMessages();
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.languageOptions = {
      'en-us': 'englishMessages',
      'pt-br': 'portugueseMessages',
    };
    this.languageConfig = {
      option: 'en-us',
      index: 0,
    };
  }

  private showLanguageOptions(): void {
    this.console.one({
      message: `${this.messages.language}`,
      color: 'yellow',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    console.table(Object.keys(this.languageOptions));
    this.console.one({
      message: '',
      color: 'white',
      bold: false,
      breakStart: false,
      breakEnd: false,
    });

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return rl.question(this.messages.answer, optionChosen => {
      const choice = Object.keys(this.languageOptions)[
        Number(optionChosen)
      ] as keyof ILanguageOptionsDTO;

      if (
        this.isLanguageOptionsKeyType(choice) &&
        Object.keys(this.languageOptions)[Number(optionChosen)]
      ) {
        this.languageConfig = {
          option: choice,
          index: Number(optionChosen),
        };

        rl.close();
        this.showChosenOption();
        return this.setLanguageOption();
      }
      rl.close();
      this.validateOption(optionChosen);
      return this.execute();
    });
  }

  protected validateOption(optionChosen: string): void {
    return this.console.one({
      message: `"${optionChosen}"${this.messages.invalidLanguage}`,
      color: 'red',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  protected showChosenOption({ option, index } = this.languageConfig): void {
    const languageChosen = this[this.languageOptions[option]].execute();

    this.messages = languageChosen;

    return this.console.one({
      message: `${this.messages.choice}${
        Object.keys(this.languageOptions)[index]
      }`,
      color: 'green',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
  }

  protected setLanguageOption(): void {
    this.fileManager.truncateFile([
      'node_modules',
      'cross-api',
      'src',
      'tools',
      'messages.js',
    ]);
    return this.fileManager.createFile(
      ['node_modules', 'cross-api', 'src', 'tools', 'messages.js'],
      this.createDefaultLanguage.execute(JSON.stringify(this.messages)),
    );
  }

  protected isLanguageOptionsKeyType(
    _option: keyof ILanguageOptionsDTO,
  ): _option is keyof ILanguageOptionsDTO {
    return true;
  }

  public execute(): void {
    return this.showLanguageOptions();
  }
}
