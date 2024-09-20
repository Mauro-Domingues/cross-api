export class CreateErrorLog {
  public execute(): string {
    return `import { appendFileSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';

export function createErrorLog(error: {
  code: number;
  message_code: string;
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
    [error.message_code]: error.message,
    PATH: error.stack?.split('\\${'n'}').slice(1).join('\\${'n'}').trim() ?? 'NOT SET',
  };

  appendFileSync(
    resolve(__dirname, '..', 'assets', 'errors.log'),
    JSON.stringify(errorBody, null, 2).concat(',\\${'n'}'),
  );

  console.log(errorBody);
}
`;
  }
}
