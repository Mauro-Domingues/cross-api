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
import { IMessagesDTO, Messages } from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { Console } from '@tools/console';

export class MakeFourthLayer {
  private messages: IMessagesDTO;
  private console: Console;
  private createMapAndUpdateString: CreateMapAndUpdateString;
  private createMapAndUpdate: CreateMapAndUpdate;
  private createMapAndPatchString: CreateMapAndPatchString;
  private createMapAndPatch: CreateMapAndPatch;
  private createMapAndInsert: CreateMapAndInsert;
  private createMapAndClone: CreateMapAndClone;
  private createDataSource: CreateDataSource;
  private createContainer: CreateContainer;
  private createAppError: CreateAppError;
  private createTypeorm: CreateTypeorm;

  constructor() {
    this.messages = new Messages().execute();
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
    if (
      !existsSync(resolve('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'))
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'),
        this.createMapAndClone.execute(),
      );
    } else {
      truncateSync(
        resolve('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'),
      );
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'),
        this.createMapAndClone.execute(),
      );
    }
    this.console.one([
      `- mapAndCloneAttribute.ts.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !existsSync(
        resolve('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'),
      )
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'),
        this.createMapAndInsert.execute(),
      );
    } else {
      truncateSync(
        resolve('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'),
      );
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'),
        this.createMapAndInsert.execute(),
      );
    }
    this.console.one([
      `- mapAndInsertAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !existsSync(resolve('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'))
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'),
        this.createMapAndPatch.execute(),
      );
    } else {
      truncateSync(
        resolve('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'),
      );
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'),
        this.createMapAndPatch.execute(),
      );
    }
    this.console.one([
      `- mapAndPatchAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !existsSync(resolve('src', 'utils', 'mappers', 'mapAndPatchString.ts'))
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndPatchString.ts'),
        this.createMapAndPatchString.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'mappers', 'mapAndPatchString.ts'));
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndPatchString.ts'),
        this.createMapAndPatchString.execute(),
      );
    }
    this.console.one([
      `- mapAndPatchString.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !existsSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'),
      )
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'),
        this.createMapAndUpdate.execute(),
      );
    } else {
      truncateSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'),
      );
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'),
        this.createMapAndUpdate.execute(),
      );
    }
    this.console.one([
      `- mapAndUpdateAttribute.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (
      !existsSync(resolve('src', 'utils', 'mappers', 'mapAndUpdateString.ts'))
    ) {
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateString.ts'),
        this.createMapAndUpdateString.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'mappers', 'mapAndUpdateString.ts'));
      appendFileSync(
        resolve('src', 'utils', 'mappers', 'mapAndUpdateString.ts'),
        this.createMapAndUpdateString.execute(),
      );
    }
    this.console.one([
      `- mapAndUpdateString.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'container', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        this.createContainer.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'container', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        this.createContainer.execute(),
      );
    }
    this.console.one([
      `- container/index.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'errors', 'AppError.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'errors', 'AppError.ts'),
        this.createAppError.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'errors', 'AppError.ts'));
      appendFileSync(
        resolve('src', 'shared', 'errors', 'AppError.ts'),
        this.createAppError.execute(),
      );
    }
    this.console.one([
      `- AppError.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'typeorm', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'typeorm', 'index.ts'),
        this.createTypeorm.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'typeorm', 'index.ts'));
      appendFileSync(
        resolve('src', 'shared', 'typeorm', 'index.ts'),
        this.createTypeorm.execute(),
      );
    }
    this.console.one([
      `- typeorm/index.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'typeorm', 'dataSource.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'typeorm', 'dataSource.ts'),
        this.createDataSource.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'typeorm', 'dataSource.ts'));
      appendFileSync(
        resolve('src', 'shared', 'typeorm', 'dataSource.ts'),
        this.createDataSource.execute(),
      );
    }
    this.console.one([
      `- dataSource.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
