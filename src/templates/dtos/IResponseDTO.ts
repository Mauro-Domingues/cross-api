export class CreateIResponseDTO {
  public execute(): string {
    return `import type { ICodeDTO } fr\om './ICodeDTO';

export interface IResponseDTO<T> {
  code: number;
  messageCode: ICodeDTO;
  message: string;
  data: T;
}
`;
  }
}
