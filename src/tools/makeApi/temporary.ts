import fs from 'fs';
import createAuthConfig from '@templates/providers/config/authConfig';
import createCorsConfig from '@templates/providers/config/corsConfig';

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
  if (!fs.existsSync('src/config/cors.ts')) {
    fs.appendFile('src/config/cors.ts', createCorsConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/cors.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cors.ts', createCorsConfig(), error => {
      if (error) throw error;
    });
  }
}
