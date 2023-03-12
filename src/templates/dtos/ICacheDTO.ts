export class CreateICacheDTO {
  public execute(): string {
    return `export default interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
  }
}
