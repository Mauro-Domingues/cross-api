import { CreateTypeorm } from '@templates/api/typeorm';
import { CreateAppError } from '@templates/errors/appError';
import { CreateContainer } from '@templates/index/container';
import { CreateDataSource } from '@templates/api/dataSource';
import { CreateMapAndClone } from '@templates/utils/mappers/mapAndClone';
import { CreateMapAndInsert } from '@templates/utils/mappers/mapAndInsert';
import { CreateMapAndPatch } from '@templates/utils/mappers/mapAndPatch';
import { CreateMapAndPatchString } from '@templates/utils/mappers/mapAndPatchString';
import { CreateMapAndUpdate } from '@templates/utils/mappers/mapAndUpdate';
import { CreateMapAndUpdateString } from '@templates/utils/mappers/mapAndUpdateString';
import { FileManager } from '@tools/fileManager';

export class MakeFourthLayer {
  private readonly fileManager: FileManager;
  private readonly createMapAndUpdateString: CreateMapAndUpdateString;
  private readonly createMapAndUpdate: CreateMapAndUpdate;
  private readonly createMapAndPatchString: CreateMapAndPatchString;
  private readonly createMapAndPatch: CreateMapAndPatch;
  private readonly createMapAndInsert: CreateMapAndInsert;
  private readonly createMapAndClone: CreateMapAndClone;
  private readonly createDataSource: CreateDataSource;
  private readonly createContainer: CreateContainer;
  private readonly createAppError: CreateAppError;
  private readonly createTypeorm: CreateTypeorm;

  constructor() {
    this.fileManager = new FileManager();
    this.createMapAndUpdateString = new CreateMapAndUpdateString();
    this.createMapAndUpdate = new CreateMapAndUpdate();
    this.createMapAndPatchString = new CreateMapAndPatchString();
    this.createMapAndPatch = new CreateMapAndPatch();
    this.createMapAndInsert = new CreateMapAndInsert();
    this.createMapAndClone = new CreateMapAndClone();
    this.createDataSource = new CreateDataSource();
    this.createContainer = new CreateContainer();
    this.createAppError = new CreateAppError();
    this.createTypeorm = new CreateTypeorm();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'],
      this.createMapAndClone,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'],
      this.createMapAndInsert,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'],
      this.createMapAndPatch,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchString.ts'],
      this.createMapAndPatchString,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'],
      this.createMapAndUpdate,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateString.ts'],
      this.createMapAndUpdateString,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createContainer,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'errors', 'AppError.ts'],
      this.createAppError,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'index.ts'],
      this.createTypeorm,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'dataSource.ts'],
      this.createDataSource,
    );
  }
}
