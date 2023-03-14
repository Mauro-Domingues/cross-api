import { appendFile, truncate } from 'fs';
import { createInterface, Interface } from 'readline';

import { EnglishMessages } from '@templates/assets/en-us';
import { PortugueseMessages } from '@templates/assets/pt-br';
import messages from './messages';

interface ILanguageOptionsDTO {
  'en-us': 'englishMessages';
  'pt-br': 'portugueseMessages';
}

export class ConfigLanguage {
  private englishMessages: EnglishMessages;
  private portugueseMessages: PortugueseMessages;
  private messages: typeof messages;
  private rl: Interface;
  private Language: ILanguageOptionsDTO;

  constructor() {
    this.englishMessages = new EnglishMessages();
    this.portugueseMessages = new PortugueseMessages();
    this.messages = messages;
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.Language = {
      'en-us': 'englishMessages',
      'pt-br': 'portugueseMessages',
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
  }

  private validateOption(optionChosen: string) {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      `"${optionChosen}${this.messages.invalidLanguage}`,
      '\x1b[0m',
    );
    this.rl.close();
    this.execute();
  }

  private setLanguageOption(option: keyof ILanguageOptionsDTO, index: number) {
    const parsedMessages: typeof messages = JSON.parse(
      this[this.Language[option]].execute(),
    );

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
      `${parsedMessages.choice}${Object.keys(this.Language)[index]}`,
      '\x1b[0m',
    );
    console.log('');
  }

  private isLanguageOptionsKeyType(
    secret: keyof ILanguageOptionsDTO | string,
  ): secret is keyof ILanguageOptionsDTO {
    return true;
  }

  public execute(): void {
    this.showLanguageOptions();

    this.rl.question(this.messages.answer, optionChosen => {
      const option: keyof ILanguageOptionsDTO | string = optionChosen;

      if (!this.isLanguageOptionsKeyType(option)) {
        this.validateOption(optionChosen);
      } else {
        this.setLanguageOption(option, Number(optionChosen));
      }

      this.rl.close();
    });
  }
}
