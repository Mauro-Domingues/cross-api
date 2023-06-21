import { createInterface } from 'readline';

import { EnglishMessages } from '@templates/assets/en-us.js';
import { PortugueseMessages } from '@templates/assets/pt-br.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

interface ILanguageConfigDTO {
  option: keyof ILanguageOptionsDTO;
  index: number;
}

export interface ILanguageOptionsDTO {
  'en-us': 'englishMessages';
  'pt-br': 'portugueseMessages';
}

export class ConfigLanguage {
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly englishMessages: EnglishMessages;
  private readonly portugueseMessages: PortugueseMessages;
  private readonly createDefaultLanguage: CreateDefaultLanguage;
  public readonly Language: ILanguageOptionsDTO;
  public messages: IMessagesDTO;
  public languageConfig: ILanguageConfigDTO;

  constructor() {
    this.englishMessages = new EnglishMessages();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.portugueseMessages = new PortugueseMessages();
    this.createDefaultLanguage = new CreateDefaultLanguage();
    this.messages = new Messages().execute();
    this.Language = {
      'en-us': 'englishMessages',
      'pt-br': 'portugueseMessages',
    };
    this.languageConfig = {
      option: 'en-us',
      index: 0,
    };
  }

  private showLanguageOptions(): void {
    this.console.one([`${this.messages.language}`, 'yellow', true, true, true]);
    console.table(Object.keys(this.Language));
    this.console.one(['', 'white', false, false, false]);

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(this.messages.answer, optionChosen => {
      const choice = Object.keys(this.Language)[
        Number(optionChosen)
      ] as keyof ILanguageOptionsDTO;

      if (
        this.isLanguageOptionsKeyType(choice) &&
        Object.keys(this.Language)[Number(optionChosen)]
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

  public validateOption(optionChosen: string): void {
    this.console.one([
      `"${optionChosen}"${this.messages.invalidLanguage}`,
      'red',
      true,
      true,
      false,
    ]);
  }

  public showChosenOption({ option, index } = this.languageConfig): void {
    const languageChosen = this[this.Language[option]].execute();

    this.messages = languageChosen;

    this.console.one([
      `${this.messages.choice}${Object.keys(this.Language)[index]}`,
      'green',
      true,
      true,
      true,
    ]);
  }

  public async setLanguageOption(): Promise<void> {
    await this.fileManager.truncateFile([
      'node_modules',
      'cross-api',
      'dist',
      'tools',
      'messages.js',
    ]);
    return this.fileManager.createFile(
      ['node_modules', 'cross-api', 'dist', 'tools', 'messages.js'],
      this.createDefaultLanguage.execute(JSON.stringify(this.messages)),
    );
  }

  public isLanguageOptionsKeyType(
    _option: keyof ILanguageOptionsDTO,
  ): _option is keyof ILanguageOptionsDTO {
    return true;
  }

  public async execute(): Promise<void> {
    return this.showLanguageOptions();
  }
}
