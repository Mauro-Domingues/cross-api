import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createUploadConfig } from '@templates/providers/config/uploadConfig';
import { createFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { createDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { createS3Storage } from '@templates/providers/implementations/S3Storage';
import { createIStorage } from '@templates/providers/models/IStorage';
import { createStorageIndex } from '@templates/providers/storageIndex';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentStorageProvider(
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (!existsSync('src')) {
    mkdirSync('src');
  }
  if (!existsSync('src/config')) {
    mkdirSync('src/config');
  }
  if (!existsSync('src/modules')) {
    mkdirSync('src/modules');
  }
  if (!existsSync('src/shared')) {
    mkdirSync('src/shared');
  }
  if (!existsSync('src/shared/container')) {
    mkdirSync('src/shared/container');
  }
  if (!existsSync('src/shared/container/index.ts')) {
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
    );
  }
  appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './StorageProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!existsSync('src/config/upload.ts')) {
    appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      createStorageIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      createStorageIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- StorageProvider ${messages.created}`,
    '\x1b[0m',
  );
}
