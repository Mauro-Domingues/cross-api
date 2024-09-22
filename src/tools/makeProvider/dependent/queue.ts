import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
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
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

export class MakeDependentQueueProvider extends DependentBaseProvider {
  private readonly createQueueConfig: CreateQueueConfig;
  private readonly createQueueIndex: CreateQueueIndex;
  private readonly createExampleJob: CreateExampleJob;
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

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'jobs'],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'public',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'queue.ts'], this.createQueueConfig];
  }

  protected createJobs(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [['src', 'jobs', 'Example.ts'], this.createExampleJob],
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'QueueProvider',
          'public',
          'jobs.ts',
        ],
        this.createJobIndex,
      ],
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
          'QueueProvider',
          'dtos',
          'IQueueDTO.ts',
        ],
        this.createIQueueDTO,
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
        'QueueProvider',
        'fakes',
        'FakeQueueProvider.ts',
      ],
      this.createFakeQueue,
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
          'QueueProvider',
          'implementations',
          'KueProvider.ts',
        ],
        this.createKueQueue,
      ],
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
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
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'QueueProvider',
          'implementations',
          'BullProvider.ts',
        ],
        this.createBullQueue,
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
        'QueueProvider',
        'models',
        'IQueueProvider.ts',
      ],
      this.createIQueue,
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
      "import './QueueProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'QueueProvider',
        'index.ts',
      ],
      this.createQueueIndex,
    ];
  }
}
