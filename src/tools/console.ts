const colorOptions = {
  blue: '\x1b[38;2;0;155;255m',
  green: '\x1b[38;2;0;255;155m',
  yellow: '\x1b[38;2;255;255;0m',
  red: '\x1b[38;2;255;0;0m',
  purple: '\x1b[38;2;255;0;255m',
  white: '\x1b[38;2;0;0;0m',
};

type IInputDTO = [string, keyof typeof colorOptions, boolean, boolean, boolean];

export class Console {
  private readonly isbreakStart = (breakStart?: boolean) =>
    breakStart ? '\n' : '\b';
  private readonly isbreakend = (breakEnd?: boolean) =>
    breakEnd ? '\n' : '\b';
  private readonly getColor = (color: keyof typeof colorOptions) =>
    colorOptions[color];
  private readonly isBold = (bold?: boolean) => (bold ? '\x1b[1m' : '\x1b[0m');

  public one(assets: IInputDTO): void {
    const payload: Array<string> = [
      String(this.isBold(assets[2])),
      String(this.getColor(assets[1])),
      String(
        `${this.isbreakStart(assets[3])}${assets[0]}${this.isbreakend(
          assets[4],
        )}`,
      ),
      String('\x1b[0m'),
    ];

    return console.log(payload.join(''));
  }

  public many(assets: Array<IInputDTO>): void {
    const payload: Array<string> = [];
    assets.map(asset => {
      return payload.push(
        String(this.isBold(asset[2])),
        String(this.getColor(asset[1])),
        String(
          `${this.isbreakStart(asset[3])}${asset[0]}${this.isbreakend(
            asset[4],
          )}`,
        ),
        String('\x1b[0m'),
      );
    });

    return console.log(payload.join(''));
  }
}
