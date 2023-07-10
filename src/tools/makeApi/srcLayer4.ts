import { CreateTypeorm } from '@templates/api/typeorm.js';
import { CreateAppError } from '@templates/errors/appError.js';
import { CreateContainer } from '@templates/index/container.js';
import { CreateDataSource } from '@templates/api/dataSource.js';
import { CreateMapAndClone } from '@templates/utils/mappers/mapAndClone.js';
import { CreateMapAndInsert } from '@templates/utils/mappers/mapAndInsert.js';
import { CreateMapAndPatch } from '@templates/utils/mappers/mapAndPatch.js';
import { CreateMapAndPatchString } from '@templates/utils/mappers/mapAndPatchString.js';
import { CreateMapAndUpdate } from '@templates/utils/mappers/mapAndUpdate.js';
import { CreateMapAndUpdateString } from '@templates/utils/mappers/mapAndUpdateString.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeFourthLayer {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
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
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
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
    this.console.one([
      `- mapAndCloneAttribute.ts.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'],
      this.createMapAndInsert,
    );
    this.console.one([
      `- mapAndInsertAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'],
      this.createMapAndPatch,
    );
    this.console.one([
      `- mapAndPatchAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndPatchString.ts'],
      this.createMapAndPatchString,
    );
    this.console.one([
      `- mapAndPatchString.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'],
      this.createMapAndUpdate,
    );
    this.console.one([
      `- mapAndUpdateAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'mappers', 'mapAndUpdateString.ts'],
      this.createMapAndUpdateString,
    );
    this.console.one([
      `- mapAndUpdateString.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createContainer,
    );
    this.console.one([
      `- container/index.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'errors', 'AppError.ts'],
      this.createAppError,
    );
    this.console.one([
      `- AppError.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'index.ts'],
      this.createTypeorm,
    );
    this.console.one([
      `- typeorm/index.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'typeorm', 'dataSource.ts'],
      this.createDataSource,
    );
    this.console.one([
      `- dataSource.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
