export default function createIResponseDTO(): string {
  return `export default interface IResponseDTO {
  code: number;
  message_code: string;
  message: string;
  data: any;
}
`;
}
