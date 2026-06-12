export class CreateFakeWebSocket {
  public execute(): string {
    return `import { EventEmitter } fr\u006Fm 'node:events';
import { createErrorResponse } fr\u006Fm '@utils/createErrorResponse';
import type { IWebSocketHandlerDTO } fr\u006Fm '../dtos/IWebSocketHandlerDTO';
import type { IWebSocketMessageDTO } fr\u006Fm '../dtos/IWebSocketMessageDTO';
import type { IWebSocketProvider } fr\u006Fm '../models/IWebSocketProvider';

export class FakeWebSocketProvider implements IWebSocketProvider {
  private readonly channels: Map<string, Array<IWebSocketMessageDTO['data']>> =
    new Map<string, Array<IWebSocketMessageDTO['data']>>();

  private readonly handlers = new Map<string, Array<IWebSocketHandlerDTO>>();

  public readonly socket: EventEmitter = new EventEmitter();

  public sendMessage<T>({
    type,
    channel,
    data,
  }: IWebSocketMessageDTO<T>): void {
    const existingChannel = this.channels.get(channel);

    if (existingChannel) {
      existingChannel.push(data);
    } else {
      this.channels.set(channel, [data]);
    }

    if (type) {
      this.socket.emit(type, data);
    }
  }

  public listen(channel: string, ...handlers: Array<IWebSocketHandlerDTO>) {
    this.handlers.set(channel, handlers);
  }

  public setupWebSocket(): void {
    this.handlers.forEach((handlers, type) => {
      this.socket.on(
        type,
        async (rawMessage: Required<IWebSocketMessageDTO>) => {
          const { channel, data, sender } = rawMessage;

          try {
            await handlers.reduce<Promise<void>>(
              async (prevHandler, handler) => {
                await prevHandler;

                return handler({ channel, data, sender, type });
              },
              Promise.resolve(),
            );
          } catch (error: unknown) {
            const errorResponse = createErrorResponse(error);

            this.sendMessage({
              channel,
              data: { ...errorResponse, isErrored: true },
            });
          }
        },
      );
    });
  }

  public close(): void {
    this.socket.removeAllListeners();
  }
}
`;
  }
}
