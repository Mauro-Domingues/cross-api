export class CreateICacheDTO {
    execute() {
        return `export interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
    }
}
