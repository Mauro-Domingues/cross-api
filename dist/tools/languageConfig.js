import { appendFileSync, truncateSync } from 'fs';
import { createInterface } from 'readline';
import { resolve } from 'path';
import { EnglishMessages } from '../templates/assets/en-us.js';
import { PortugueseMessages } from '../templates/assets/pt-br.js';
import { Messages } from './messages.js';
import { CreateDefaultLanguage } from '../templates/assets/defaultLanguage.js';

export class ConfigLanguage {
  messages;
  Language;
  languageConfig;
  englishMessages;
  portugueseMessages;
  createDefaultLanguage;
  constructor() {
    this.englishMessages = new EnglishMessages();
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
  showLanguageOptions() {
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
        this.showChosenOption();
        this.setLanguageOption();
      } else {
        rl.close();
        this.validateOption(optionChosen);
        this.execute();
      }
    });
  }
  validateOption(optionChosen) {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      `"${optionChosen}"${this.messages.invalidLanguage}`,
      '\x1b[0m',
    );
  }
  showChosenOption({ option, index } = this.languageConfig) {
    const languageChosen = this[this.Language[option]].execute();
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
  setLanguageOption() {
    truncateSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'),
    );
    appendFileSync(
      resolve('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'),
      this.createDefaultLanguage.execute(JSON.stringify(this.messages)),
    );
  }
  isLanguageOptionsKeyType(_option) {
    return true;
  }
  async execute() {
    return this.showLanguageOptions();
  }
}
