export class CreateConvertToMilliseconds {
  public execute(): string {
    return String.raw`import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { AppError } fr\u006Fm '@shared/errors/AppError';

export function convertToMilliseconds(delay: IIntervalDTO): number {
  const match = delay.match(/\d+/);
  if (match === null) {
    throw new AppError('INVALID_DELAY_FORMAT', 'Invalid delay format');
  }

  const miliseconds = Number.parseInt(match[0], 10);
  const timeUnit = delay.replaceAll(/\d/g, '');

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
}
`;
  }
}
