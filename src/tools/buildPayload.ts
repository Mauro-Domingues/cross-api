import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';
import { IInputDTO } from '@interfaces/IInputDTO';
import { IBuildPayloadDTO } from '@interfaces/ISingletonDTO';
import { Concat } from '@tools/concat';

export class BuildPayload {
  private readonly colorOptions: IColorOptionDTO;
  private static instance: IBuildPayloadDTO;
  private readonly concat: Concat;

  private constructor() {
    this.concat = Concat.getInstance();
    this.colorOptions = {
      purple: '\x1b[38;2;255;0;255m',
      yellow: '\x1b[38;2;255;255;0m',
      green: '\x1b[38;2;0;255;155m',
      blue: '\x1b[38;2;0;155;255m',
      white: '\x1b[38;2;0;0;0m',
      red: '\x1b[38;2;255;0;0m',
    };
  }

  public static getInstance(): IBuildPayloadDTO {
    if (!BuildPayload.instance) {
      BuildPayload.instance = new BuildPayload();
    }
    return BuildPayload.instance;
  }

  private isbreakStart(breakStart?: boolean): '\n' | '' {
    return breakStart ? '\n' : '';
  }

  private isbreakEnd(breakEnd?: boolean): '\n' | '' {
    return breakEnd ? '\n' : '';
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
    options,
  }: IInputDTO): Array<string> {
    const optionsSet = new Set(options);
    return [
      this.isBold(optionsSet.has('bold')),
      this.getColor(color),
      this.isbreakStart(optionsSet.has('breakStart')),
      this.concat.execute(...message),
      this.isbreakEnd(optionsSet.has('breakEnd')),
      '\x1b[0m',
    ];
  }

  public execute(assets: IInputDTO | Array<IInputDTO>): string {
    const payload = (Array.isArray(assets) ? assets : [assets])
      .flatMap(asset => this.stringifyPayload(asset))
      .join('');

    return payload;
  }
}
