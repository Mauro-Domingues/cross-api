import { IColorOptionDTO } from '@interfaces/IColorOptionDTO';

export interface IInputDTO {
  readonly options?: Array<'breakStart' | 'breakEnd' | 'bold'>;
  readonly message: Array<string> | string;
  readonly color: keyof IColorOptionDTO;
}
