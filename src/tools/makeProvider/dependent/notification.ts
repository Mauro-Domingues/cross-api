import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateNotificationConfig } from '@templates/providers/config/notificationConfig';
import { CreateINotificationDTO } from '@templates/providers/dtos/INotificationDTO';
import { CreateFakeNotification } from '@templates/providers/fakes/fakeNotification';
import { CreateFirebaseNotification } from '@templates/providers/implementations/FirebaseNotification';
import { CreateOneSignalNotification } from '@templates/providers/implementations/OneSignalNotification';
import { CreateINotification } from '@templates/providers/models/INotification';
import { CreateNotificationIndex } from '@templates/providers/notificationIndex';
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

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [
      ['src', 'config', 'notification.ts'],
      this.createNotificationConfig,
    ];
  }

  protected createDtos(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'dtos',
          'ISendNotificationDTO.ts',
        ],
        this.createINotificationDTO,
      ],
    ];
  }

  protected createFake(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'fakes',
        'FakeNotificationProvider.ts',
      ],
      this.createFakeNotification,
    ];
  }

  protected createImplementations(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
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
          fatherNames.pluralLowerModuleName,
          'providers',
          'NotificationProvider',
          'implementations',
          'FirebaseProvider.ts',
        ],
        this.createFirebaseNotification,
      ],
    ];
  }

  protected createModel(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'models',
        'INotificationProvider.ts',
      ],
      this.createINotification,
    ];
  }

  protected createInjection(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    this.fileManager.createFile(
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './NotificationProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'NotificationProvider',
        'index.ts',
      ],
      this.createNotificationIndex,
    ];
  }
}
