import messages from '@tools/messages';
import { appendFile, existsSync, truncate } from 'fs';

export async function makeSecondLayer(): Promise<void> {
  if (!existsSync('src/swagger.json')) {
    appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  } else {
    truncate('src/swagger.json', error => {
      if (error) console.log(error);
    });
    appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- swagger.json ${messages.created}`,
    '\x1b[0m',
  );
}
