export class CreateIResponseDTO {
  public execute(): string {
    return `export interface IResponseDTO<T> {
  code: number;
  message_code: messageCode;
  message: string;
  data: T;
}
`;
  }
}
