import { CreateAppError } from '@templates/errors/appError';
import { CreateContainer } from '@templates/index/container';
import { CreateMapAndClone } from '@templates/utils/mappers/mapAndClone';
import { CreateMapAndInsert } from '@templates/utils/mappers/mapAndInsert';
import { CreateMapAndPatch } from '@templates/utils/mappers/mapAndPatch';
import { CreateMapAndPatchString } from '@templates/utils/mappers/mapAndPatchString';
import { CreateMapAndUpdate } from '@templates/utils/mappers/mapAndUpdate';
import { CreateMapAndUpdateString } from '@templates/utils/mappers/mapAndUpdateString';
import { FileManager } from '@tools/fileManager';
import { CreateIndexMapper } from '@templates/utils/mappers/indexMapper';
import { CreateConnection } from '@templates/api/connection';

export class MakeFourthLayer {
  private readonly createMapAndUpdateString: CreateMapAndUpdateString;
  private readonly createMapAndPatchString: CreateMapAndPatchString;
  private readonly createMapAndUpdate: CreateMapAndUpdate;
  private readonly createMapAndInsert: CreateMapAndInsert;
  private readonly createMapAndPatch: CreateMapAndPatch;
  private readonly createMapAndClone: CreateMapAndClone;
  private readonly createIndexMapper: CreateIndexMapper;
  private readonly createConnection: CreateConnection;
  private readonly createContainer: CreateContainer;
  private readonly createAppError: CreateAppError;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createMapAndUpdateString = new CreateMapAndUpdateString();
    this.createMapAndPatchString = new CreateMapAndPatchString();
    this.createMapAndUpdate = new CreateMapAndUpdate();
    this.createMapAndInsert = new CreateMapAndInsert();
    this.createMapAndPatch = new CreateMapAndPatch();
    this.createIndexMapper = new CreateIndexMapper();
    this.createMapAndClone = new CreateMapAndClone();
    this.createConnection = new CreateConnection();
    this.createContainer = new CreateContainer();
    this.createAppError = new CreateAppError();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'utils', 'mappers', 'index.ts'], this.createIndexMapper],
      [
        ['src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'],
        this.createMapAndClone,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'],
        this.createMapAndInsert,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'],
        this.createMapAndPatch,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndPatchString.ts'],
        this.createMapAndPatchString,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'],
        this.createMapAndUpdate,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndUpdateString.ts'],
        this.createMapAndUpdateString,
      ],
      [['src', 'shared', 'container', 'index.ts'], this.createContainer],
      [['src', 'shared', 'errors', 'AppError.ts'], this.createAppError],
      [['src', 'shared', 'typeorm', 'index.ts'], this.createConnection],
    ]);
  }
}
