import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';
import { CreateFakeQueue } from '@templates/providers/fakes/fakeQueue';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateJobs } from '@templates/providers/public/jobs';
import { CreateQueueIndex } from '@templates/providers/queueIndex';
import { BaseProvider } from '@tools/makeProvider/independent/base';

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
    this.constructBase();
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './QueueProvider';\n`,
    );
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'jobs'],
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'public'],
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'dtos'],
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'QueueProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'models'],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'queue.ts'], this.createQueueConfig],
      [['src', 'jobs', 'Example.ts'], this.createExampleJob],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'QueueProvider',
          'index.ts',
        ],
        this.createQueueIndex,
      ],
    ]);
  }
}
