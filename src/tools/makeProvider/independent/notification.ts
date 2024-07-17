import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { BaseProvider } from '@tools/makeProvider/independent/base';

export class MakeNotificationProvider extends BaseProvider {
  private readonly createOneSignalNotification: CreateOneSignalNotification;
  private readonly createFirebaseNotification: CreateFirebaseNotification;
  private readonly createNotificationConfig: CreateNotificationConfig;
  private readonly createNotificationIndex: CreateNotificationIndex;
  private readonly createFakeNotification: CreateFakeNotification;
  private readonly createINotificationDTO: CreateINotificationDTO;
  private readonly createINotification: CreateINotification;

  public constructor() {
    super();
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createFirebaseNotification = new CreateFirebaseNotification();
    this.createNotificationConfig = new CreateNotificationConfig();
    this.createNotificationIndex = new CreateNotificationIndex();
    this.createFakeNotification = new CreateFakeNotification();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createINotification = new CreateINotification();
  }

  public execute(): void {
    this.constructBase();
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './NotificationProvider';\n",
    );
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
        'dtos',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
        'fakes',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
        'implementations',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
        'models',
      ],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'notification.ts'], this.createNotificationConfig],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ],
        this.createINotificationDTO,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'fakes',
          'FakeNotificationProvider.ts',
        ],
        this.createFakeNotification,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'implementations',
          'OneSignalProvider.ts',
        ],
        this.createOneSignalNotification,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'implementations',
          'FirebaseProvider.ts',
        ],
        this.createFirebaseNotification,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'models',
          'INotificationProvider.ts',
        ],
        this.createINotification,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'NotificationProvider',
          'index.ts',
        ],
        this.createNotificationIndex,
      ],
    ]);
  }
}
