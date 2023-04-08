export class CreateICacheDTO {
  public execute(): string {
    return `export interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
  }
}
