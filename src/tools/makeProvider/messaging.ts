import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMessagingConfig } from '@templates/providers/config/messagingConfig';
import { CreateFakeMessaging } from '@templates/providers/fakes/fakeMessaging';
import { CreateKafkaMessaging } from '@templates/providers/implementations/KafkaMessaging';
import { CreateMessagingIndex } from '@templates/providers/messagingIndex';
import { CreateIMessaging } from '@templates/providers/models/IMessaging';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateMessagingProvider extends BaseProvider {
  private readonly createMessagingConfig: CreateMessagingConfig;
  private readonly createMessagingIndex: CreateMessagingIndex;
  private readonly createKafkaMessaging: CreateKafkaMessaging;
  private readonly createFakeMessaging: CreateFakeMessaging;
  private readonly createIMessaging: CreateIMessaging;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createMessagingConfig = new CreateMessagingConfig();
    this.createMessagingIndex = new CreateMessagingIndex();
    this.createKafkaMessaging = new CreateKafkaMessaging();
    this.createFakeMessaging = new CreateFakeMessaging();
    this.createIMessaging = new CreateIMessaging();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'MessagingProvider', 'fakes'],
      [this.basePath, 'MessagingProvider', 'implementations'],
      [this.basePath, 'MessagingProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'messaging.ts'], this.createMessagingConfig];
  }

  protected declare createDtos: () => Array<IMultiFileDTO>;

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'MessagingProvider', 'fakes', 'FakeMessagingProvider.ts'],
      this.createFakeMessaging,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'MessagingProvider',
          'implementations',
          'KafkaProvider.ts',
        ],
        this.createKafkaMessaging,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'MessagingProvider', 'models', 'IMessagingProvider.ts'],
      this.createIMessaging,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './MessagingProvider';\n",
    );

    return [
      [this.basePath, 'MessagingProvider', 'index.ts'],
      this.createMessagingIndex,
    ];
  }
}
