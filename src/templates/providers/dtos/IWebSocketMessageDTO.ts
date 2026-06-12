export class CreateIWebSocketMessageDTO {
  public execute(): string {
    return `import type { WebSocket } fr\u006Fm 'ws';

export interface IWebSocketMessageDTO<T = unknown> {
  type?: string;
  sender?: WebSocket;
  channel: string;
  data: T;
}
`;
  }
}
