export class CreateConvertToCron {
  public execute(): string {
    return `import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { AppError } fr\u006Fm '@shared/errors/AppError';

export function convertToCron(delay: IIntervalDTO): string {
  const match = delay.match(/\\d+/);
  if (match === null) {
    throw new AppError('INVALID_DELAY_FORMAT', 'Invalid delay format');
  }

  const value = Number.parseInt(match[0], 10);
  const timeUnit = delay.replaceAll(/\\d/g, '');

  switch (timeUnit) {
    case 's':
      return \`*/\${value} * * * * *\`;
    case 'min':
      return \`*/\${value} * * * *\`;
    case 'h':
      return \`0 */\${value} * * *\`;
    case 'd':
      return \`0 0 */\${value} * *\`;
    default:
      return \`*/\${Math.floor(value / 1000)} * * * * *\`;
  }
}
`;
  }
}
