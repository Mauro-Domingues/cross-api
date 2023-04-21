import { appendFileSync, truncateSync } from 'fs';
import { createInterface } from 'readline';

import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import { IMessagesDTO, Messages } from '@tools/messages';
import { resolve } from 'path';
import { CreateDefaultLanguage } from '@templates/assets/defaultLanguage';
import { Console } from './console';

interface ILanguageOptionsDTO {
  'en-us': 'englishMessages';
  'pt-br': 'portugueseMessages';
}

interface ILanguageConfigDTO {
  option: keyof ILanguageOptionsDTO;
  index: number;
}

export class ConfigLanguage {
  public messages: IMessagesDTO;
  private console: Console;
  public Language: ILanguageOptionsDTO;
  public languageConfig: ILanguageConfigDTO;
  private englishMessages: EnglishMessages;
  private portugueseMessages: PortugueseMessages;
  private createDefaultLanguage: CreateDefaultLanguage;

  constructor() {
    this.englishMessages = new EnglishMessages();
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
      const choice = Object.keys(this.Language)[Number(optionChosen)];
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
        this.setLanguageOption();
      } else {
        rl.close();
        this.validateOption(optionChosen);
        this.execute();
      }
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

  public setLanguageOption(): void {
    truncateSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'),
    );
    appendFileSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'),
      this.createDefaultLanguage.execute(JSON.stringify(this.messages)),
    );
  }

  public isLanguageOptionsKeyType(
    _option: keyof ILanguageOptionsDTO | string,
  ): _option is keyof ILanguageOptionsDTO {
    return true;
  }

  public async execute(): Promise<void> {
    return this.showLanguageOptions();
  }
}
