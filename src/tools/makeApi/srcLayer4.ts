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
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'index.ts'],
      this.createIndexMapper,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'],
      this.createMapAndClone,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'],
      this.createMapAndInsert,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'],
      this.createMapAndPatch,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchString.ts'],
      this.createMapAndPatchString,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'],
      this.createMapAndUpdate,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateString.ts'],
      this.createMapAndUpdateString,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createContainer,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'errors', 'AppError.ts'],
      this.createAppError,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'index.ts'],
      this.createConnection,
    );
  }
}
