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
import { appendFile, existsSync, truncate } from 'fs';

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
    if (!existsSync('src/utils/mappers/mapAndCloneAttribute.ts')) {
      appendFile(
        'src/utils/mappers/mapAndCloneAttribute.ts',
        this.createMapAndClone.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndCloneAttribute.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndCloneAttribute.ts',
        this.createMapAndClone.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndCloneAttribute.ts.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/mappers/mapAndInsertAttribute.ts')) {
      appendFile(
        'src/utils/mappers/mapAndInsertAttribute.ts',
        this.createMapAndInsert.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndInsertAttribute.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndInsertAttribute.ts',
        this.createMapAndInsert.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndInsertAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/mappers/mapAndPatchAttribute.ts')) {
      appendFile(
        'src/utils/mappers/mapAndPatchAttribute.ts',
        this.createMapAndPatch.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndPatchAttribute.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndPatchAttribute.ts',
        this.createMapAndPatch.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndPatchAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/mappers/mapAndPatchString.ts')) {
      appendFile(
        'src/utils/mappers/mapAndPatchString.ts',
        this.createMapAndPatchString.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndPatchString.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndPatchString.ts',
        this.createMapAndPatchString.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndPatchString.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/mappers/mapAndUpdateAttribute.ts')) {
      appendFile(
        'src/utils/mappers/mapAndUpdateAttribute.ts',
        this.createMapAndUpdate.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndUpdateAttribute.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndUpdateAttribute.ts',
        this.createMapAndUpdate.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndUpdateAttribute.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/mappers/mapAndUpdateString.ts')) {
      appendFile(
        'src/utils/mappers/mapAndUpdateString.ts',
        this.createMapAndUpdateString.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/mappers/mapAndUpdateString.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/mappers/mapAndUpdateString.ts',
        this.createMapAndUpdateString.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- mapAndUpdateString.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/container/index.ts')) {
      appendFile(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/shared/container/index.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- container/index.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/errors/AppError.ts')) {
      appendFile(
        'src/shared/errors/AppError.ts',
        this.createAppError.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/shared/errors/AppError.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/shared/errors/AppError.ts',
        this.createAppError.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- AppError.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/typeorm/index.ts')) {
      appendFile(
        'src/shared/typeorm/index.ts',
        this.createTypeorm.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/shared/typeorm/index.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/shared/typeorm/index.ts',
        this.createTypeorm.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- typeorm/index.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/typeorm/dataSource.ts')) {
      appendFile(
        'src/shared/typeorm/dataSource.ts',
        this.createDataSource.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/shared/typeorm/dataSource.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/shared/typeorm/dataSource.ts',
        this.createDataSource.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- dataSource.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
