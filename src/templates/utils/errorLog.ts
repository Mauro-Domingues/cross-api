export class CreateErrorLog {
  public execute(): string {
    return `import { appendFileSync, existsSync, mkdirSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';

export function createErrorLog(error: {
  code: number;
  messageCode: string;
  message: string;
  stack: Error['stack'];
}): void {
  const currentTime = new Date();
  const offset = currentTime.getTimezoneOffset();
  const offsetHours = -offset / 60;
  const sign = (offSet: number) => {
    if (offSet > 0) return '+';
    if (offSet < 0) return '-';
    return ' ';
  };
  const timeZoneString = \`UTC\${sign(offsetHours)}\${Math.abs(offsetHours)}\`;

  const errorBody = {
    TIME_OF_OCCURRENCE: \`\${currentTime.toLocaleDateString()} \${currentTime.toLocaleTimeString()} \${timeZoneString}\`,
    [error.messageCode]: error.message,
    PATH: error.stack?.split('\\${'n'}').slice(1).join('\\${'n'}').trim() ?? 'NOT SET',
  };

  const assetsFolder = resolve(__dirname, '..', 'assets');

  if (!existsSync(assetsFolder)) {
    mkdirSync(assetsFolder);
  }

  appendFileSync(
    resolve(assetsFolder, 'errors.log'),
    JSON.stringify(errorBody, null, 2).concat(',\\${'n'}'),
  );

  console.error(errorBody);
}
`;
  }
}
