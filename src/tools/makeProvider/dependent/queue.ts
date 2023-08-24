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
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createIQueue: CreateIQueue;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createJobs: CreateJobs;
  private readonly createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createKueQueue = new CreateKueQueue();
    this.createBeeQueue = new CreateBeeQueue();
    this.createBullQueue = new CreateBullQueue();
    this.createQueueConfig = new CreateQueueConfig();
    this.createIQueue = new CreateIQueue();
    this.createIQueueDTO = new CreateIQueueDTO();
    this.createQueueIndex = new CreateQueueIndex();
    this.createExampleJob = new CreateExampleJob();
    this.createJobs = new CreateJobs();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'jobs']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'public',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'QueueProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
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
      await this.fileManager.createFile(
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
      await this.fileManager.createFile(
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
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './QueueProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'queue.ts'],
      this.createQueueConfig,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'jobs', 'Example.ts'],
      this.createExampleJob,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    return this.console.one([
      `- QueueProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
