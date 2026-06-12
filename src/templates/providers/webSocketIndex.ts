export class CreateWebSocketIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { webSocketConfig } fr\u006Fm '@config/webSocket';
import { WSProvider } fr\u006Fm './implementations/WSProvider';
import type { IWebSocketProvider } fr\u006Fm './models/IWebSocketProvider';

const providers: Record<
  typeof webSocketConfig.driver,
  () => IWebSocketProvider
> = {
  ws: () => container.resolve(WSProvider),
};

container.registerInstance<IWebSocketProvider>(
  'WebSocketProvider',
  providers[webSocketConfig.driver](),
);
`;
  }
}
