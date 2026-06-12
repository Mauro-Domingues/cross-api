import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateWebSocketConfig } from '@templates/providers/config/webSocketConfig';
import { CreateIWebSocketHandlerDTO } from '@templates/providers/dtos/IWebSocketHandlerDTO';
import { CreateIWebSocketMessageDTO } from '@templates/providers/dtos/IWebSocketMessageDTO';
import { CreateFakeWebSocket } from '@templates/providers/fakes/fakeWebSocket';
import { CreateWSWebSocket } from '@templates/providers/implementations/WSWebSocket';
import { CreateIWebSocket } from '@templates/providers/models/IWebSocket';
import { CreateWebSocketIndex } from '@templates/providers/webSocketIndex';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateWebSocketProvider extends BaseProvider {
  private readonly createIWebSocketMessageDTO: CreateIWebSocketMessageDTO;
  private readonly createIWebSocketHandlerDTO: CreateIWebSocketHandlerDTO;
  private readonly createWebSocketConfig: CreateWebSocketConfig;
  private readonly createWebSocketIndex: CreateWebSocketIndex;
  private readonly createFakeWebSocket: CreateFakeWebSocket;
  private readonly createWSWebSocket: CreateWSWebSocket;
  private readonly createIWebSocket: CreateIWebSocket;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createIWebSocketMessageDTO = new CreateIWebSocketMessageDTO();
    this.createIWebSocketHandlerDTO = new CreateIWebSocketHandlerDTO();
    this.createWebSocketConfig = new CreateWebSocketConfig();
    this.createWebSocketIndex = new CreateWebSocketIndex();
    this.createFakeWebSocket = new CreateFakeWebSocket();
    this.createWSWebSocket = new CreateWSWebSocket();
    this.createIWebSocket = new CreateIWebSocket();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'WebSocketProvider', 'fakes'],
      [this.basePath, 'WebSocketProvider', 'implementations'],
      [this.basePath, 'WebSocketProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'webSocket.ts'], this.createWebSocketConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'WebSocketProvider', 'dtos', 'IWebSocketMessageDTO.ts'],
        this.createIWebSocketMessageDTO,
      ],
      [
        [this.basePath, 'WebSocketProvider', 'dtos', 'IWebSocketHandlerDTO.ts'],
        this.createIWebSocketHandlerDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'WebSocketProvider', 'fakes', 'FakeWebSocketProvider.ts'],
      this.createFakeWebSocket,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'WebSocketProvider',
          'implementations',
          'DiskProvider.ts',
        ],
        this.createWSWebSocket,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'WebSocketProvider', 'models', 'IWebSocketProvider.ts'],
      this.createIWebSocket,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './WebSocketProvider';\n",
    );

    return [
      [this.basePath, 'WebSocketProvider', 'index.ts'],
      this.createWebSocketIndex,
    ];
  }
}
