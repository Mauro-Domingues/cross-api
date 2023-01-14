import createAuthConfig from '@templates/providers/config/authConfig';
import fs from 'fs';

export default async function makeTemporary(): Promise<void> {
  if (!fs.existsSync('src/config/auth.ts')) {
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  }
}
