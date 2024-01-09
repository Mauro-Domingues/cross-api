import { IModuleNamesDTO } from '@tools/names';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateQueueIndex } from '@templates/providers/queueIndex';
import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateJobs } from '@templates/providers/public/jobs';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';
import { CreateFakeQueue } from '@templates/providers/fakes/fakeQueue';
import { DependentBaseProvider } from './base';

export class MakeDependentQueueProvider extends DependentBaseProvider {
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createFakeQueue: CreateFakeQueue;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createIQueue: CreateIQueue;
  private readonly createJobs: CreateJobs;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createQueueConfig = new CreateQueueConfig();
    this.createExampleJob = new CreateExampleJob();
    this.createQueueIndex = new CreateQueueIndex();
    this.createIQueueDTO = new CreateIQueueDTO();
    this.createBullQueue = new CreateBullQueue();
    this.createFakeQueue = new CreateFakeQueue();
    this.createKueQueue = new CreateKueQueue();
    this.createBeeQueue = new CreateBeeQueue();
    this.createIQueue = new CreateIQueue();
    this.createJobs = new CreateJobs();
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
      'fakes',
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
        'fakes',
        'FakeQueueProvider.ts',
      ],
      this.createFakeQueue,
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
