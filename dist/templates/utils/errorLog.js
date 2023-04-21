export class CreateErrorLog {
  execute() {
    return `export function returnErrorLog(error: Error): void {
  const currentTime = new Date();
  const offset = currentTime.getTimezoneOffset();
  const offsetHours = -offset / 60;
  const sign = (offSet: number) => {
    if (offSet > 0) return '+';
    if (offSet < 0) return '-';
    return ' ';
  };
  const timeZoneString = \`UTC\${sign(offsetHours)}\${Math.abs(offsetHours)}\`;

  console.log(
    '{',
    '\\x1b[1m',
    '\\x1b[38;2;0;155;255m',
    \`\\${'n'}  "Time of occurrence": \${currentTime.toLocaleDateString()} \${currentTime.toLocaleTimeString()} \${timeZoneString}\`,
    '\\x1b[0m',
    ',',
    '\\x1b[1m',
    '\\x1b[38;2;255;0;0m',
    \`\\${'n'}  "\${error.name || 'AppError'}": \${error.message}\`,
    '\\x1b[0m',
    error.stack
      ? \`,\\${'n'}  "Path": \\${'n'}\${
          error.stack?.split('\\${'n'}').slice(1).toString().replaceAll(',', '\\${'n'}') ||
          '    "not set."'
        }\\${'n'}}\\${'n'}\`
      : '\\${'n'}}\\${'n'}',
  );
}
`;
  }
}
