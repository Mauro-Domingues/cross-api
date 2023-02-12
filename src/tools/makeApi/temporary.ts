import { appendFile, existsSync, truncate } from 'fs';
import { createAuthConfig } from '@templates/providers/config/authConfig';
import { createCorsConfig } from '@templates/providers/config/corsConfig';

export async function makeTemporary(): Promise<void> {
  if (!existsSync('src/config/auth.ts')) {
    appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  }
  if (!existsSync('src/config/cors.ts')) {
    appendFile('src/config/cors.ts', createCorsConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/cors.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/cors.ts', createCorsConfig(), error => {
      if (error) throw error;
    });
  }
}
