import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { IModuleNamesDTO } from '@tools/names';
import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { DependentBaseProvider } from './base';

export class MakeDependentNotificationProvider extends DependentBaseProvider {
  private readonly createOneSignalNotification: CreateOneSignalNotification;
  private readonly createFirebaseNotification: CreateFirebaseNotification;
  private readonly createNotificationConfig: CreateNotificationConfig;
  private readonly createNotificationIndex: CreateNotificationIndex;
  private readonly createINotificationDTO: CreateINotificationDTO;
  private readonly createFakeNotification: CreateFakeNotification;
  private readonly createINotification: CreateINotification;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
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

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.one({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'NotificationProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'NotificationProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'NotificationProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'NotificationProvider',
      'models',
    ]);
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './NotificationProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'notification.ts'],
      this.createNotificationConfig,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'index.ts',
      ],
      this.createNotificationIndex,
    );
  }
}
