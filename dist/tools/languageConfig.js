"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigLanguage = void 0;
const fs_1 = require("fs");
const readline_1 = require("readline");
const en_us_1 = require("@templates/assets/en-us");
const pt_br_1 = require("@templates/assets/pt-br");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
const defaultLanguage_1 = require("@templates/assets/defaultLanguage");
class ConfigLanguage {
    constructor() {
        this.englishMessages = new en_us_1.EnglishMessages();
        this.portugueseMessages = new pt_br_1.PortugueseMessages();
        this.createDefaultLanguage = new defaultLanguage_1.CreateDefaultLanguage();
        this.messages = new messages_1.Messages().execute();
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
        console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${this.messages.language}`, '\x1b[0m');
        console.log('\x1b[1m');
        console.table(Object.keys(this.Language));
        console.log('');
        const rl = (0, readline_1.createInterface)({
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
                this.setLanguageOption();
            }
            else {
                rl.close();
                this.validateOption(optionChosen);
                this.execute();
            }
        });
    }
    validateOption(optionChosen) {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `"${optionChosen}"${this.messages.invalidLanguage}`, '\x1b[0m');
    }
    showChosenOption({ option, index } = this.languageConfig) {
        const languageChosen = this[this.Language[option]].execute();
        this.messages = languageChosen;
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `${this.messages.choice}${Object.keys(this.Language)[index]}`, '\x1b[0m');
        console.log('');
    }
    setLanguageOption() {
        (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'));
        (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'messages.js'), this.createDefaultLanguage.execute(JSON.stringify(this.messages)));
    }
    isLanguageOptionsKeyType(_option) {
        return true;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.showLanguageOptions();
        });
    }
}
exports.ConfigLanguage = ConfigLanguage;
