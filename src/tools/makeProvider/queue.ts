import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateExampleJob } from '@templates/jobs/ExampleJob';
import { CreateQueueConfig } from '@templates/providers/config/queueConfig';
import { CreateIHandleDataDTO } from '@templates/providers/dtos/IHandleDataDTO';
import { CreateIHandleDTO } from '@templates/providers/dtos/IHandleDTO';
import { CreateIQueueDTO } from '@templates/providers/dtos/IQueueDTO';
import { CreateFakeQueue } from '@templates/providers/fakes/fakeQueue';
import { CreateBeeQueue } from '@templates/providers/implementations/BeeQueue';
import { CreateBullQueue } from '@templates/providers/implementations/BullQueue';
import { CreateKueQueue } from '@templates/providers/implementations/KueQueue';
import { CreateIQueue } from '@templates/providers/models/IQueue';
import { CreateJobIndex } from '@templates/providers/public/jobIndex';
import { CreateQueueIndex } from '@templates/providers/queueIndex';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateQueueProvider extends BaseProvider {
  private readonly createIHandleDataDTO: CreateIHandleDataDTO;
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
  private readonly createIHandleDTO: CreateIHandleDTO;
  private readonly createBullQueue: CreateBullQueue;
  private readonly createFakeQueue: CreateFakeQueue;
  private readonly createIQueueDTO: CreateIQueueDTO;
  private readonly createKueQueue: CreateKueQueue;
  private readonly createBeeQueue: CreateBeeQueue;
  private readonly createJobIndex: CreateJobIndex;
  private readonly createIQueue: CreateIQueue;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createIHandleDataDTO = new CreateIHandleDataDTO();
    this.createQueueConfig = new CreateQueueConfig();
    this.createExampleJob = new CreateExampleJob();
    this.createQueueIndex = new CreateQueueIndex();
    this.createIHandleDTO = new CreateIHandleDTO();
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
      [this.basePath, 'QueueProvider', 'public'],
      [this.basePath, 'QueueProvider', 'dtos'],
      [this.basePath, 'QueueProvider', 'fakes'],
      [this.basePath, 'QueueProvider', 'implementations'],
      [this.basePath, 'QueueProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'queue.ts'], this.createQueueConfig];
  }

  protected createJobs(): Array<IMultiFileDTO> {
    return [
      [['src', 'jobs', 'Example.ts'], this.createExampleJob],
      [
        [this.basePath, 'QueueProvider', 'public', 'jobs.ts'],
        this.createJobIndex,
      ],
    ];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'QueueProvider', 'dtos', 'IHandleDTO.ts'],
        this.createIHandleDTO,
      ],
      [
        [this.basePath, 'QueueProvider', 'dtos', 'IHandleDataDTO.ts'],
        this.createIHandleDataDTO,
      ],
      [
        [this.basePath, 'QueueProvider', 'dtos', 'IQueueDTO.ts'],
        this.createIQueueDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'QueueProvider', 'fakes', 'FakeQueueProvider.ts'],
      this.createFakeQueue,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'QueueProvider', 'implementations', 'KueProvider.ts'],
        this.createKueQueue,
      ],
      [
        [this.basePath, 'QueueProvider', 'implementations', 'BeeProvider.ts'],
        this.createBeeQueue,
      ],
      [
        [this.basePath, 'QueueProvider', 'implementations', 'BullProvider.ts'],
        this.createBullQueue,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'QueueProvider', 'models', 'IQueueProvider.ts'],
      this.createIQueue,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './QueueProvider';\n",
    );

    return [
      [this.basePath, 'QueueProvider', 'index.ts'],
      this.createQueueIndex,
    ];
  }
}
