export class CreateErrorLog {
  public execute(): string {
    return `import { NextFunction } from 'express';
import { appendFileSync } from 'fs';
import { resolve } from 'path';

export function createErrorLog(error: Error, next: NextFunction): void {
  const currentTime = new Date();
  const offset = currentTime.getTimezoneOffset();
  const offsetHours = -offset / 60;
  const sign = (offSet: number) => {
    if (offSet > 0) return '+';
    if (offSet < 0) return '-';
    return ' ';
  };
  const timeZoneString = \`UTC\${sign(offsetHours)}\${Math.abs(offsetHours)}\`;

  appendFileSync(
    resolve(__dirname, '..', 'assets', 'errors.log'),
    \`{
  "Time of occurrence": "\${currentTime.toLocaleDateString()} \${currentTime.toLocaleTimeString()} \${timeZoneString}",
  "\${error.name ?? 'AppError'}": "\${error.message}",
  "Path":
\${
  error.stack?.split('\\${'n'}').slice(1).toString().replaceAll(',', '\\${'n'}') ??
  '    "not set."'
},
}\\${'n'}\`,
  );

  console.log(
    '{',
    '\\x1b[1m',
    '\\x1b[38;2;0;155;255m',
    \`\\${'n'}  "Time of occurrence": \${currentTime.toLocaleDateString()} \${currentTime.toLocaleTimeString()} \${timeZoneString}\`,
    '\\x1b[0m',
    ',',
    '\\x1b[1m',
    '\\x1b[38;2;255;0;0m',
    \`\\${'n'}  "\${error.name ?? 'AppError'}": \${error.message}\`,
    '\\x1b[0m',
    error.stack
      ? \`,\\${'n'}  "Path": \\${'n'}\${
          error.stack?.split('\\${'n'}').slice(1).toString().replaceAll(',', '\\${'n'}') ??
          '    "not set."'
        }\\${'n'}}\\${'n'}\`
      : '\\${'n'}}\\${'n'}',
  );

  return next();
}
`;
  }
}
