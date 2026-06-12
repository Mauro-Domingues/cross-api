export class CreateIWebSocket {
  public execute(): string {
    return `import type { Server } fr\u006Fm 'node:http';
import type { IWebSocketHandlerDTO } fr\u006Fm '../dtos/IWebSocketHandlerDTO';
import type { IWebSocketMessageDTO } fr\u006Fm '../dtos/IWebSocketMessageDTO';

export interface IWebSocketProvider {
  sendMessage<T>(data: IWebSocketMessageDTO<T>): void;
  listen(type: string, ...data: Array<IWebSocketHandlerDTO>): void;
  setupWebSocket(server: Server): void;
  close(): void;
}
`;
  }
}
