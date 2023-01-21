export default function createIResponseDTO(): string {
  return `declare interface IResponseDTO<T> {
  code: number;
  message_code: string;
  message: string;
  data: T;
}
`;
}
