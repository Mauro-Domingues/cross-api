const colorOptions = {
  purple: '\x1b[38;2;255;0;255m',
  yellow: '\x1b[38;2;255;255;0m',
  green: '\x1b[38;2;0;255;155m',
  blue: '\x1b[38;2;0;155;255m',
  white: '\x1b[38;2;0;0;0m',
  red: '\x1b[38;2;255;0;0m',
} as const;

interface IInputDTO {
  readonly color: keyof typeof colorOptions;
  readonly breakStart: boolean;
  readonly breakEnd: boolean;
  readonly message: string;
  readonly bold: boolean;
}

export class Console {
  private isbreakStart(breakStart?: boolean): '\n' | '\b' {
    return breakStart ? '\n' : '\b';
  }

  private isbreakEnd(breakEnd?: boolean): '\n' | '\b' {
    return breakEnd ? '\n' : '\b';
  }

  private getColor(
    color: keyof typeof colorOptions,
  ): (typeof colorOptions)[keyof typeof colorOptions] {
    return colorOptions[color];
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
  }: IInputDTO): string {
    return [
      this.isBold(bold),
      this.getColor(color),
      `${this.isbreakStart(breakStart)}${message}${this.isbreakEnd(breakEnd)}`,
      '\x1b[0m',
    ].join('');
  }

  public single(asset: IInputDTO): void {
    const payload = this.stringifyPayload(asset);

    return console.log(payload);
  }

  public multi(assets: Array<IInputDTO>): void {
    const payload = assets.map(asset => this.stringifyPayload(asset));

    return console.log(payload.join(''));
  }
}
