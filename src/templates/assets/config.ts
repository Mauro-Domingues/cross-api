import fs from 'fs';

const configBody = `import messages from './messages';

export default function configJson(): void {
  console.log('');
  console.log(
    '\\x1b[1m',
    '\\x1b[38;2;0;255;155m',
    \`➤  \${messages.configured}\`,
    '\\x1b[0m',
  );
  console.log('');
}`;

export default function config(): void {
  fs.truncate('./node_modules/cross-api/src/tools/config.ts', error => {
    if (error) console.log(error);
  });
  fs.appendFile(
    './node_modules/cross-api/src/tools/config.ts',
    configBody,
    error => {
      if (error) throw error;
    },
  );
}
