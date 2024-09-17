import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';

export interface IInputDTO {
  readonly message: Array<string> | string;
  readonly color: keyof IColorOptionDTO;
  readonly breakStart: boolean;
  readonly breakEnd: boolean;
  readonly bold: boolean;
}
