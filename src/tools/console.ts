const colorOptions = {
  blue: '\x1b[38;2;0;155;255m',
  green: '\x1b[38;2;0;255;155m',
  yellow: '\x1b[38;2;255;255;0m',
  red: '\x1b[38;2;255;0;0m',
  purple: '\x1b[38;2;255;0;255m',
  white: '\x1b[38;2;0;0;0m',
};

interface IInputDTO {
  message: string;
  color: keyof typeof colorOptions;
  bold: boolean;
  breakStart: boolean;
  breakEnd: boolean;
}

export class Console {
  private readonly isbreakStart = (breakStart?: boolean) =>
    breakStart ? '\n' : '\b';
  private readonly isbreakEnd = (breakEnd?: boolean) =>
    breakEnd ? '\n' : '\b';
  private readonly getColor = (color: keyof typeof colorOptions) =>
    colorOptions[color];
  private readonly isBold = (bold?: boolean) => (bold ? '\x1b[1m' : '\x1b[0m');

  public single({
    message,
    color,
    bold,
    breakStart,
    breakEnd,
  }: IInputDTO): void {
    const payload: Array<string> = [
      String(this.isBold(bold)),
      String(this.getColor(color)),
      String(
        `${this.isbreakStart(breakStart)}${message}${this.isbreakEnd(
          breakEnd,
        )}`,
      ),
      String('\x1b[0m'),
    ];

    return console.log(payload.join(''));
  }

  public multi(assets: Array<IInputDTO>): void {
    const payload: Array<string> = [];
    assets.map(asset => {
      return payload.push(
        String(this.isBold(asset.bold)),
        String(this.getColor(asset.color)),
        String(
          `${this.isbreakStart(asset.breakStart)}${
            asset.message
          }${this.isbreakEnd(asset.breakEnd)}`,
        ),
        String('\x1b[0m'),
      );
    });

    return console.log(payload.join(''));
  }
}
