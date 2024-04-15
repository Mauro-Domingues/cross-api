import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';
import { IInputDTO } from '@interfaces/IInputDTO';

export class Console {
  private readonly colorOptions: IColorOptionDTO;

  constructor() {
    this.colorOptions = {
      purple: '\x1b[38;2;255;0;255m',
      yellow: '\x1b[38;2;255;255;0m',
      green: '\x1b[38;2;0;255;155m',
      blue: '\x1b[38;2;0;155;255m',
      white: '\x1b[38;2;0;0;0m',
      red: '\x1b[38;2;255;0;0m',
    };
  }

  private isbreakStart(breakStart?: boolean): '\n' | '\b' {
    return breakStart ? '\n' : '\b';
  }

  private isbreakEnd(breakEnd?: boolean): '\n' | '\b' {
    return breakEnd ? '\n' : '\b';
  }

  private getColor(
    color: keyof IColorOptionDTO,
  ): IColorOptionDTO[keyof IColorOptionDTO] {
    return this.colorOptions[color];
  }

  private isBold(bold?: boolean): '\x1b[1m' | '\x1b[0m' {
    return bold ? '\x1b[1m' : '\x1b[0m';
  }

  private stringifyPayload({
    message,
    color,
    bold,
    breakStart,
    breakEnd,
  }: IInputDTO): Array<string> {
    return [
      this.isBold(bold),
      this.getColor(color),
      this.isbreakStart(breakStart),
      message,
      this.isbreakEnd(breakEnd),
      '\x1b[0m',
    ];
  }

  public execute(assets: IInputDTO | Array<IInputDTO>): void {
    const payload = (Array.isArray(assets) ? assets : [assets]).map(asset =>
      this.stringifyPayload(asset),
    );

    return console.log(payload.flat().join(''));
  }
}
