export default function createIListDTO(): string {
  return `import IResponseDTO from './IResponseDTO';

export default interface IListDTO<T>
  extends IResponseDTO<{
    total: number;
    page: number;
    perPage: number;
    list: T[];
  }> {
  data: {
    total: number;
    page: number;
    perPage: number;
    list: T[];
  };
}
`;
}
