export class CreateIListDTO {
  public execute(): string {
    return `import type { ICodeDTO } fr\om './ICodeDTO';

export interface IListDTO<T> {
  code: number;
  messageCode: ICodeDTO;
  message: string;
  pagination: {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
  };
  data: Array<T>;
}
`;
  }
}
