import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';

export interface IInputDTO {
  readonly message: Array<string> | string;
  readonly color: keyof IColorOptionDTO;
  readonly breakStart?: true;
  readonly breakEnd?: true;
  readonly bold?: true;
}
