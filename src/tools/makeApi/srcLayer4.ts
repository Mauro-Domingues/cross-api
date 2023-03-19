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
import messages from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class MakeFourthLayer {
  private messages: typeof messages;
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
    this.messages = messages;
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndCloneAttribute.ts.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndInsertAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndPatchAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndPatchString.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndUpdateAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndUpdateString.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- container/index.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- AppError.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- typeorm/index.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- dataSource.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
