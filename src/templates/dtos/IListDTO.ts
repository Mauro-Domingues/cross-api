export default function createIListDTO(): string {
  return `declare interface IListDTO<T>
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
