export class CreateIResponseDTO {
  execute() {
    return `export interface IResponseDTO<T> {
  code: number;
  message_code: string;
  message: string;
  data: T;
}
`;
  }
}
