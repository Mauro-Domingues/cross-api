import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';
import { CreateFakeQueue } from '@templates/providers/fakes/fakeQueue';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateJobIndex } from '@templates/providers/public/jobIndex';
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
  private readonly createJobIndex: CreateJobIndex;
  private readonly createIQueue: CreateIQueue;

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
    this.createJobIndex = new CreateJobIndex();
    this.createIQueue = new CreateIQueue();
  }

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
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
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'queue.ts'], this.createQueueConfig];
  }

  protected createJobs(): Array<IMultiFileDTO> {
    return [
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
        this.createJobIndex,
      ],
    ];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
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
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
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
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
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
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
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
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './QueueProvider';\n",
    );

    return [
      ['src', 'shared', 'container', 'providers', 'QueueProvider', 'index.ts'],
      this.createQueueIndex,
    ];
  }
}
