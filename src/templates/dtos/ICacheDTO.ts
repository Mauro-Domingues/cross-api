export default function createICacheDTO(): string {
  return `declare interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
}
