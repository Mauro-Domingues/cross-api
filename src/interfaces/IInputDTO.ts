import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';

export interface IInputDTO {
  readonly color: keyof IColorOptionDTO;
  readonly breakStart: boolean;
  readonly breakEnd: boolean;
  readonly message: string;
  readonly bold: boolean;
}
