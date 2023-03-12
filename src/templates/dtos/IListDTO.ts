export class CreateIListDTO {
  public execute(): string {
    return `import IResponseDTO from './IResponseDTO';

export default interface IListDTO<T> extends IResponseDTO<T[]> {
  pagination: {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
  };
  data: T[];
}
`;
  }
}
