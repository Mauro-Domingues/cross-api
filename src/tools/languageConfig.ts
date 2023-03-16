import { appendFile, truncate } from 'fs';
import { createInterface } from 'readline';

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
  public messages: typeof messages;
  public Language: ILanguageOptionsDTO;
  public languageConfig: ILanguageConfigDTO;
  private englishMessages: EnglishMessages;
  private portugueseMessages: PortugueseMessages;

  constructor() {
    this.englishMessages = new EnglishMessages();
    this.portugueseMessages = new PortugueseMessages();
    this.messages = messages;
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
        this.setLanguageOption();
      } else {
        rl.close();
        this.validateOption(optionChosen);
        this.execute();
      }
    });
  }

  public validateOption(optionChosen: string): void {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      `"${optionChosen}"${this.messages.invalidLanguage}`,
      '\x1b[0m',
    );
  }

  public setLanguageOption({ option, index } = this.languageConfig): void {
    const languageChosen = this[this.Language[option]].execute();

    truncate('./node_modules/cross-api/dist/tools/messages.js', error => {
      if (error) console.log(error);
    });
    appendFile(
      './node_modules/cross-api/dist/tools/messages.js',
      `module.exports = ${JSON.stringify(languageChosen)}`,
      error => {
        if (error) console.log(error);
      },
    );

    this.messages = languageChosen;

    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;255;155m',
      `${this.messages.choice}${Object.keys(this.Language)[index]}`,
      '\x1b[0m',
    );
    console.log('');
  }

  public isLanguageOptionsKeyType(
    option: keyof ILanguageOptionsDTO | string,
  ): option is keyof ILanguageOptionsDTO {
    return true;
  }

  public async execute(): Promise<void> {
    return this.showLanguageOptions();
  }
}
