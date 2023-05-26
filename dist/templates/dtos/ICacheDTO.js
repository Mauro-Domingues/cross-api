export class CreateICacheDTO {
    execute() {
        return `export interface ICacheDTO<T> {
  data: Array<T>;
  total: number;
}
`;
    }
}
