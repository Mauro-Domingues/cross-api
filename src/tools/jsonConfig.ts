import fs from 'fs';
import readline from 'readline';
import shell from 'shelljs';

import userJson from '../../package.json';
import enUs from '../templates/en-us';
import ptBr from '../templates/pt-br';

class LanguageOption {
  Language;

  constructor(Language: string) {
    this.Language = Language;
  }
}

async function configJson(): Promise<void> {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];

  console.log('');
  console.log('➤  Which language do you prefer?');
  console.log('');
  console.table([languages[0], languages[1]]);
  console.log('');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Your answer: ', languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log(`"${languageOption}" is not a valid option`);
      rl.close();
      configJson();
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
        console.log('=========={ Installing dependencies }==========');
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
        console.log('=========={ Instalando dependências }==========');
        console.log('');
      }

      rl.close();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newScript: any = userJson;

      newScript.scripts = {
        ...newScript.scripts,
        cross: 'ts-node ./node_modules/cross-api-template/index.ts',
      };

      fs.writeFileSync('./package.json', JSON.stringify(newScript), {
        encoding: 'utf8',
        flag: 'w',
      });

      // shell.exec('npm install yarn -g');
      // shell.exec('yarn add typeorm');
      // shell.exec('yarn add bcrypt -D');
      rl.close();
    }
  });
}

export default configJson;
