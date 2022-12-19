export default function createIListDTO(): string {
  return `import IResponseDTO from "./IResponseDTO";

export default interface IListDTO extends IResponseDTO {
  data: {
    total: number,
    page: number,
    perPage: number,
    list: any[]
  }
}`;
}
