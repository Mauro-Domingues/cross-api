import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
import { CustomError } from '@tools/customError';
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

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
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
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
      throw new CustomError({
        message: this.messages.providers.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.constructBase();
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './NotificationProvider';\n",
    );
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'index.ts',
        ],
        this.createNotificationIndex,
      ],
    ]);
  }
}
