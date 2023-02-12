import { createTypeorm } from '@templates/api/typeorm';
import { createAppError } from '@templates/errors/appError';
import { createContainer } from '@templates/index/container';
import { createDataSource } from '@templates/api/dataSource';
import { createMapAndClone } from '@templates/utils/mappers/mapAndClone';
import { createMapAndInsert } from '@templates/utils/mappers/mapAndInsert';
import { createMapAndPatch } from '@templates/utils/mappers/mapAndPatch';
import { createMapAndPatchString } from '@templates/utils/mappers/mapAndPatchString';
import { createMapAndUpdate } from '@templates/utils/mappers/mapAndUpdate';
import { createMapAndUpdateString } from '@templates/utils/mappers/mapAndUpdateString';
import messages from '@tools/messages';
import { appendFile, existsSync, truncate } from 'fs';

export async function makeFourthLayer(): Promise<void> {
  if (!existsSync('src/utils/mappers/mapAndCloneAttribute.ts')) {
    appendFile(
      'src/utils/mappers/mapAndCloneAttribute.ts',
      createMapAndClone(),
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
      createMapAndClone(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndCloneAttribute.ts.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/mappers/mapAndInsertAttribute.ts')) {
    appendFile(
      'src/utils/mappers/mapAndInsertAttribute.ts',
      createMapAndInsert(),
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
      createMapAndInsert(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndInsertAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/mappers/mapAndPatchAttribute.ts')) {
    appendFile(
      'src/utils/mappers/mapAndPatchAttribute.ts',
      createMapAndPatch(),
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
      createMapAndPatch(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndPatchAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/mappers/mapAndPatchString.ts')) {
    appendFile(
      'src/utils/mappers/mapAndPatchString.ts',
      createMapAndPatchString(),
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
      createMapAndPatchString(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndPatchString.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/mappers/mapAndUpdateAttribute.ts')) {
    appendFile(
      'src/utils/mappers/mapAndUpdateAttribute.ts',
      createMapAndUpdate(),
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
      createMapAndUpdate(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndUpdateAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/mappers/mapAndUpdateString.ts')) {
    appendFile(
      'src/utils/mappers/mapAndUpdateString.ts',
      createMapAndUpdateString(),
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
      createMapAndUpdateString(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndUpdateString.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/container/index.ts')) {
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/shared/container/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- container/index.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/errors/AppError.ts')) {
    appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/shared/errors/AppError.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- AppError.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/typeorm/index.ts')) {
    appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/shared/typeorm/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- typeorm/index.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/typeorm/dataSource.ts')) {
    appendFile(
      'src/shared/typeorm/dataSource.ts',
      createDataSource(),
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
      createDataSource(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- dataSource.ts ${messages.created}`,
    '\x1b[0m',
  );
}
