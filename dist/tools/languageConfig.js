import { createInterface } from 'readline';
import { EnglishMessages } from '../templates/assets/en-us.js';
import { PortugueseMessages } from '../templates/assets/pt-br.js';
import { Messages } from './messages.js';
import { CreateDefaultLanguage } from '../templates/assets/defaultLanguage.js';
import { Console } from './console.js';
import { FileManager } from './fileManager.js';
export class ConfigLanguage {
    messages;
    fileManager;
    console;
    Language;
    languageConfig;
    englishMessages;
    portugueseMessages;
    createDefaultLanguage;
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
    showLanguageOptions() {
        this.console.one([`${this.messages.language}`, 'yellow', true, true, true]);
        console.table(Object.keys(this.Language));
        this.console.one(['', 'white', false, false, false]);
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(this.messages.answer, optionChosen => {
            const choice = Object.keys(this.Language)[Number(optionChosen)];
            if (this.isLanguageOptionsKeyType(choice) &&
                Object.keys(this.Language)[Number(optionChosen)]) {
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
    validateOption(optionChosen) {
        this.console.one([
            `"${optionChosen}"${this.messages.invalidLanguage}`,
            'red',
            true,
            true,
            false,
        ]);
    }
    showChosenOption({ option, index } = this.languageConfig) {
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
    async setLanguageOption() {
        await this.fileManager.truncateFile([
            'node_modules',
            'cross-api',
            'dist',
            'tools',
            'messages.js',
        ]);
        return this.fileManager.createFile(['node_modules', 'cross-api', 'dist', 'tools', 'messages.js'], this.createDefaultLanguage.execute(JSON.stringify(this.messages)));
    }
    isLanguageOptionsKeyType(_option) {
        return true;
    }
    async execute() {
        return this.showLanguageOptions();
    }
}
