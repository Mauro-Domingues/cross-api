import fs from 'fs';
import messages from '../messages';

export default async function makeSecondLayer(): Promise<void> {
  if (!fs.existsSync('src/swagger.json')) {
    fs.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/swagger.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- swagger.json ${messages.created}`,
    '\x1b[0m',
  );
}
