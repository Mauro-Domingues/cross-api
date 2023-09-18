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
  protected readonly fileManager: FileManager;
  protected languageConfig: ILanguageConfigDTO;
  protected readonly console: Console;
  protected messages: IMessagesDTO;

  constructor() {
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
    this.console.one([`${this.messages.language}`, 'yellow', true, true, true]);
    console.table(Object.keys(this.languageOptions));
    this.console.one(['', 'white', false, false, false]);

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(this.messages.answer, optionChosen => {
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
    this.console.one([
      `"${optionChosen}"${this.messages.invalidLanguage}`,
      'red',
      true,
      true,
      false,
    ]);
  }

  protected showChosenOption({ option, index } = this.languageConfig): void {
    const languageChosen = this[this.languageOptions[option]].execute();

    this.messages = languageChosen;

    this.console.one([
      `${this.messages.choice}${Object.keys(this.languageOptions)[index]}`,
      'green',
      true,
      true,
      true,
    ]);
  }

  protected async setLanguageOption(): Promise<void> {
    await this.fileManager.truncateFile([
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

  public async execute(): Promise<void> {
    return this.showLanguageOptions();
  }
}
