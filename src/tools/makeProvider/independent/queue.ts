import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { CreateExampleJob } from '@templates/jobs/ExampleJob.js';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig.js';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue.js';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue.js';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue.js';
import { CreateIQueue } from '@templates/providers/models/IQueue.js';
import { CreateJobs } from '@templates/providers/public/jobs.js';
import { CreateQueueIndex } from '@templates/providers/queueIndex.js';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO.js';

export class MakeQueueProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createIQueue: CreateIQueue;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createJobs: CreateJobs;

  constructor() {
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
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'jobs']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'public',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'QueueProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
        'providers',
        'QueueProvider',
        'models',
        'IQueueProvider.ts',
      ],
      this.createIQueue,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'index.ts'],
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
