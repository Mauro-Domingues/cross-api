import { appendFile, truncate } from 'fs';
import { createInterface, Interface } from 'readline';

import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import messages from './messages';

interface ILanguageOptionsDTO {
  'en-us': 'englishMessages';
  'pt-br': 'portugueseMessages';
}

interface ILanguageConfigDTO {
  option: keyof ILanguageOptionsDTO;
  index: number;
}

export class ConfigLanguage {
  private messages: typeof messages;
  private rl: Interface;
  private Language: ILanguageOptionsDTO;
  private languageIndex: string[];
  private englishMessages: EnglishMessages;
  private portugueseMessages: PortugueseMessages;
  private languageConfig: ILanguageConfigDTO;
  public parsedMessages: typeof messages;
  private chosen: keyof ILanguageOptionsDTO | string;

  constructor() {
    this.englishMessages = new EnglishMessages();
    this.portugueseMessages = new PortugueseMessages();
    this.chosen = '';
    this.messages = messages;
    this.parsedMessages = messages;
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.languageIndex = ['en-us', 'pt-br'];
    this.Language = {
      'en-us': 'englishMessages',
      'pt-br': 'portugueseMessages',
    };
    this.languageConfig = {
      option: 'en-us',
      index: 0,
    };
  }

  private showLanguageOptions() {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;255;0m',
      `${this.messages.language}`,
      '\x1b[0m',
    );
    console.log('\x1b[1m');
    console.table(Object.keys(this.Language));
    console.log('');

    this.rl.question(this.messages.answer, optionChosen => {
      this.chosen = optionChosen;

      if (
        this.isLanguageOptionsKeyType(this.chosen) &&
        Object.keys(this.Language)[Number(this.chosen)]
      ) {
        this.languageConfig = {
          option: this.chosen,
          index: Number(optionChosen),
        };
      } else {
        this.rl.close();
      }
    });
  }

  private validateOption(optionChosen: string) {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      `"${optionChosen}${this.messages.invalidLanguage}`,
      '\x1b[0m',
    );
  }

  private setLanguageOption({ option, index } = this.languageConfig) {
    this.parsedMessages = JSON.parse(this[this.Language[option]].execute());

    truncate('./node_modules/cross-api/dist/tools/messages.js', error => {
      if (error) console.log(error);
    });

    appendFile(
      './node_modules/cross-api/dist/tools/messages.js',
      this[this.Language[option]].execute(),
      error => {
        if (error) console.log(error);
      },
    );

    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;255;155m',
      `${this.parsedMessages.choice}${Object.keys(this.Language)[index]}`,
      '\x1b[0m',
    );
    console.log('');
  }

  private isLanguageOptionsKeyType(
    option: keyof ILanguageOptionsDTO | string,
  ): option is keyof ILanguageOptionsDTO {
    return true;
  }

  public async execute(): Promise<void> {
    this.showLanguageOptions();
    while (!Object.keys(this.Language)[Number(this.chosen)]) {
      this.validateOption(this.chosen);
      this.showLanguageOptions();
    }
    this.setLanguageOption();
  }
}
