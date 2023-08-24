import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeNotificationProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createINotification: CreateINotification;
  private readonly createINotificationDTO: CreateINotificationDTO;
  private readonly createOneSignalNotification: CreateOneSignalNotification;
  private readonly createFakeNotification: CreateFakeNotification;
  private readonly createNotificationIndex: CreateNotificationIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.fileManager = new FileManager();
    this.createINotification = new CreateINotification();
    this.createINotificationDTO = new CreateINotificationDTO();
    this.createOneSignalNotification = new CreateOneSignalNotification();
    this.createFakeNotification = new CreateFakeNotification();
    this.createNotificationIndex = new CreateNotificationIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
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
      await this.fileManager.checkAndCreateDir([
        'src',
        'shared',
        'container',
        'providers',
        'NotificationProvider',
      ]);
    }
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'NotificationProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './NotificationProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
