export function createICacheDTO(): string {
  return `export default interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
}
