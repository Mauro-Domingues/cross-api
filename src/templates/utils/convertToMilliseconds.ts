export class CreateConvertToMilliseconds {
  public execute(): string {
    return `export function convertToMilliseconds(
  delay:
    | \`\${number}d\`
    | \`\${number}h\`
    | \`\${number}min\`
    | \`\${number}s\`
    | \`\${number}ms\`,
): number {
  const match = delay.match(/\\d+/);
  if (match === null) {
    throw new AppError('Invalid delay format');
  }

  const miliseconds = parseInt(match[0], 10);
  const timeUnit = delay.replace(/\\d/g, '');

  switch (timeUnit) {
    case 'd':
      return miliseconds * 24 * 60 * 60 * 1000;
    case 'h':
      return miliseconds * 60 * 60 * 1000;
    case 'min':
      return miliseconds * 60 * 1000;
    case 's':
      return miliseconds * 1000;
    default:
      return miliseconds;
  }
}`;
  }
}