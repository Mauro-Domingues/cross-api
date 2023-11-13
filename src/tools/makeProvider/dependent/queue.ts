import { CreateContainer } from '@templates/index/container';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateQueueIndex } from '@templates/providers/queueIndex';
import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateJobs } from '@templates/providers/public/jobs';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';

export class MakeDependentQueueProvider {
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createContainer: CreateContainer;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createIQueue: CreateIQueue;
  private readonly fileManager: FileManager;
  private readonly createJobs: CreateJobs;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.createQueueConfig = new CreateQueueConfig();
    this.createExampleJob = new CreateExampleJob();
    this.createQueueIndex = new CreateQueueIndex();
    this.createIQueueDTO = new CreateIQueueDTO();
    this.createContainer = new CreateContainer();
    this.createBullQueue = new CreateBullQueue();
    this.createKueQueue = new CreateKueQueue();
    this.createBeeQueue = new CreateBeeQueue();
    this.messages = new Messages().execute();
    this.createIQueue = new CreateIQueue();
    this.fileManager = new FileManager();
    this.createJobs = new CreateJobs();
    this.console = new Console();
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

    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'jobs']);
    this.fileManager.checkAndCreateDir(['src', 'modules']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'public',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'models',
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './QueueProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'queue.ts'],
      this.createQueueConfig,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'jobs', 'Example.ts'],
      this.createExampleJob,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'public',
        'jobs.ts',
      ],
      this.createJobs,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'dtos',
        'IQueueDTO.ts',
      ],
      this.createIQueueDTO,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'implementations',
        'KueProvider.ts',
      ],
      this.createKueQueue,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'implementations',
        'BeeProvider.ts',
      ],
      this.createBeeQueue,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'implementations',
        'BullProvider.ts',
      ],
      this.createBullQueue,
    );
    this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'models',
        'IQueueProvider.ts',
      ],
      this.createIQueue,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'index.ts',
      ],
      this.createQueueIndex,
    );
  }
}
