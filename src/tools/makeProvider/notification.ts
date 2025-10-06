import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateNotificationProvider extends BaseProvider {
  private readonly createOneSignalNotification: CreateOneSignalNotification;
  private readonly createFirebaseNotification: CreateFirebaseNotification;
  private readonly createNotificationConfig: CreateNotificationConfig;
  private readonly createNotificationIndex: CreateNotificationIndex;
  private readonly createINotificationDTO: CreateINotificationDTO;
  private readonly createFakeNotification: CreateFakeNotification;
  private readonly createINotification: CreateINotification;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createFirebaseNotification = new CreateFirebaseNotification();
    this.createNotificationConfig = new CreateNotificationConfig();
    this.createNotificationIndex = new CreateNotificationIndex();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createFakeNotification = new CreateFakeNotification();
    this.createINotification = new CreateINotification();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'NotificationProvider', 'dtos'],
      [this.basePath, 'NotificationProvider', 'fakes'],
      [this.basePath, 'NotificationProvider', 'implementations'],
      [this.basePath, 'NotificationProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [
      ['src', 'config', 'notification.ts'],
      this.createNotificationConfig,
    ];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ],
        this.createINotificationDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [
        this.basePath,
        'NotificationProvider',
        'fakes',
        'FakeNotificationProvider.ts',
      ],
      this.createFakeNotification,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ],
        this.createOneSignalNotification,
      ],
      [
        [
          this.basePath,
          'NotificationProvider',
          'implementations',
          'FirebaseProvider.ts',
        ],
        this.createFirebaseNotification,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [
        this.basePath,
        'NotificationProvider',
        'models',
        'INotificationProvider.ts',
      ],
      this.createINotification,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './NotificationProvider';\n",
    );

    return [
      [this.basePath, 'NotificationProvider', 'index.ts'],
      this.createNotificationIndex,
    ];
  }
}
