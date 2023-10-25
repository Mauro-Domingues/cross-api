import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeNotificationProvider {
  private readonly createOneSignalNotification: CreateOneSignalNotification;
  private readonly createNotificationIndex: CreateNotificationIndex;
  private readonly createFakeNotification: CreateFakeNotification;
  private readonly createINotificationDTO: CreateINotificationDTO;
  private readonly createINotification: CreateINotification;
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor() {
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createNotificationIndex = new CreateNotificationIndex();
    this.createFakeNotification = new CreateFakeNotification();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createINotification = new CreateINotification();
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
      ])
    ) {
      this.fileManager.checkAndCreateDir([
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
      ]);
    }
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
        'models',
        'INotificationProvider.ts',
      ],
      this.createINotification,
    );
    this.fileManager.checkAndCreateFile(
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
    return this.console.one([
      `- NotificationProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
