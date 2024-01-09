import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateJobs } from '@templates/providers/public/jobs';
import { CreateQueueIndex } from '@templates/providers/queueIndex';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';
import { CreateFakeQueue } from '@templates/providers/fakes/fakeQueue';
import { BaseProvider } from './base';

export class MakeQueueProvider extends BaseProvider {
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createFakeQueue: CreateFakeQueue;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createIQueue: CreateIQueue;
  private readonly createJobs: CreateJobs;

  public constructor() {
    super();
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
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'public',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
        'providers',
        'QueueProvider',
        'models',
        'IQueueProvider.ts',
      ],
      this.createIQueue,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'index.ts'],
      this.createQueueIndex,
    );
  }
}
