export class CreateIWebSocketHandlerDTO {
  public execute(): string {
    return `import type { IWebSocketMessageDTO } fr\u006Fm './IWebSocketMessageDTO';

export type IWebSocketHandlerDTO<T = unknown> = (
  data: IWebSocketMessageDTO<T>,
) => void | Promise<void>;
`;
  }
}
