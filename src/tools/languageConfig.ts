import fs from 'fs';
import readline from 'readline';

import enUs from '../templates/en-us';
import ptBr from '../templates/pt-br';
import messages from './messages';

class LanguageOption {
  Language;

  constructor(Language: string) {
    this.Language = Language;
  }
}

async function configLanguage(): Promise<void> {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];

  console.log('');
  console.log(messages.language);
  console.log('');
  console.table([languages[0], languages[1]]);
  console.log('');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await rl.question(messages.answer, languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log(`"${languageOption}" is not a valid option`);
      rl.close();
      configLanguage();
    } else {
      fs.truncate('src/tools/messages.ts', error => {
        if (error) console.log(error);
      });

      if (languageOption === '0') {
        fs.appendFile('src/tools/messages.ts', enUs, error => {
          if (error) console.log(error);
        });

        console.log('');
        console.log(
          `➤  You chose the language: ${languages[languageOption].Language}`,
        );
        console.log('');
      } else {
        fs.appendFile('src/tools/messages.ts', ptBr, error => {
          if (error) console.log(error);
        });

        console.log('');
        console.log(
          `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`,
        );
        console.log('');
      }
      rl.close();
    }
  });
}

export default configLanguage;
