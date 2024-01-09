import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { BaseProvider } from './base';

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
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './NotificationProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'notification.ts'],
      this.createNotificationConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
        'index.ts',
      ],
      this.createNotificationIndex,
    );
  }
}
