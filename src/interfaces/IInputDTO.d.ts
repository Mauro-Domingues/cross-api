import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';

export interface IInputDTO {
  readonly color: keyof IColorOptionDTO;
  readonly message: Array<string> | string;
  readonly breakStart: boolean;
  readonly breakEnd: boolean;
  readonly bold: boolean;
}
