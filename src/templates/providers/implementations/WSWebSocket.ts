export class CreateWSWebSocket {
  public execute(): string {
    return `import type { RawData, WebSocket } fr\u006Fm 'ws';
import { WebSocketServer } fr\u006Fm 'ws';
import type { Server } fr\u006Fm 'node:http';
import { AppError } fr\u006Fm '@shared/errors/AppError';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { createErrorResponse } fr\u006Fm '@utils/createErrorResponse';
import type { IWebSocketHandlerDTO } fr\u006Fm '../dtos/IWebSocketHandlerDTO';
import type { IWebSocketMessageDTO } fr\u006Fm '../dtos/IWebSocketMessageDTO';
import type { IWebSocketProvider } fr\u006Fm '../models/IWebSocketProvider';

export class WSProvider implements IWebSocketProvider {
  private readonly handlers: Map<string, Array<IWebSocketHandlerDTO>> = new Map<
    string,
    Array<IWebSocketHandlerDTO>
  >();

  private wss: WebSocketServer;

  public sendMessage<T>({
    channel,
    sender,
    data,
  }: IWebSocketMessageDTO<T>): void {
    const payload = JSON.stringify({
      channel,
      data,
    });

    this.wss.clients.forEach(client => {
      if (client !== sender && client.readyState === client.OPEN) {
        client.send(payload);
      }
    });
  }

  public listen(type: string, ...handlers: Array<IWebSocketHandlerDTO>) {
    this.handlers.set(type, handlers);
  }

  public setupWebSocket(server: Server): void {
    this.wss = new WebSocketServer({ server });

    this.wss.on('connection', (webSocket: WebSocket) => {
      this.onMessage(webSocket);
    });

    const pingTimeout = this.setPing();

    this.wss.on('close', () => {
      clearInterval(pingTimeout);
    });
  }

  private rawDataToString<T>(
    message: RawData,
  ): Required<IWebSocketMessageDTO<T>> {
    if (Buffer.isBuffer(message)) {
      return JSON.parse(message.toString('utf8'));
    }
    if (message instanceof ArrayBuffer) {
      return JSON.parse(Buffer.from(new Uint8Array(message)).toString('utf8'));
    }
    if (Array.isArray(message)) {
      return JSON.parse(Buffer.concat(message).toString('utf8'));
    }

    throw new AppError('UNPROCESSABLE_ENTITY', 'Invalid data sent', 422);
  }

  private onMessage(webSocket: WebSocket): void {
    webSocket.on('message', async (rawMessage: RawData) => {
      const { type, channel, data, sender } = this.rawDataToString(rawMessage);

      try {
        const handlers = this.handlers.get(type);

        if (!handlers) {
          throw new AppError('UNPROCESSABLE_ENTITY', 'Invalid type sent', 422);
        }

        await handlers.reduce<Promise<void>>(async (prevHandler, handler) => {
          await prevHandler;

          return handler({ channel, data, sender, type });
        }, Promise.resolve());
      } catch (error: unknown) {
        const errorResponse = createErrorResponse(error);
        sender?.send(
          JSON.stringify({
            ...errorResponse,
            isErrored: true,
          }),
        );
      }
    });
  }

  private setPing(): NodeJS.Timeout {
    return setInterval(() => {
      this.wss.clients.forEach((webSocket: WebSocket) => {
        if (webSocket.readyState === webSocket.OPEN) {
          webSocket.ping();
        }
      });
    }, convertToMilliseconds('30s'));
  }

  public close(): void {
    this.wss.clients.forEach(client => client.terminate());
    this.wss.close();
  }
}
`;
  }
}
