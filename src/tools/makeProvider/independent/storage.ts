import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createUploadConfig } from '@templates/providers/config/uploadConfig';
import { createFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { createDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { createS3Storage } from '@templates/providers/implementations/S3Storage';
import { createIStorage } from '@templates/providers/models/IStorage';
import { createStorageIndex } from '@templates/providers/storageIndex';
import messages from '@tools/messages';

export async function makeStorageProvider(): Promise<void> {
  if (!existsSync('src')) {
    mkdirSync('src');
  }
  if (!existsSync('src/config')) {
    mkdirSync('src/config');
  }
  if (!existsSync('src/shared')) {
    mkdirSync('src/shared');
  }
  if (!existsSync('src/shared/container')) {
    mkdirSync('src/shared/container');
  }
  if (!existsSync('src/shared/container/providers')) {
    mkdirSync('src/shared/container/providers');
  }
  if (!existsSync('src/shared/container/providers/StorageProvider')) {
    mkdirSync('src/shared/container/providers/StorageProvider');
  }
  if (!existsSync('src/shared/container/providers/StorageProvider/fakes')) {
    mkdirSync('src/shared/container/providers/StorageProvider/fakes');
  }
  if (
    !existsSync(
      'src/shared/container/providers/StorageProvider/implementations',
    )
  ) {
    mkdirSync('src/shared/container/providers/StorageProvider/implementations');
  }
  if (!existsSync('src/shared/container/providers/StorageProvider/models')) {
    mkdirSync('src/shared/container/providers/StorageProvider/models');
  }
  appendFile(
    'src/shared/container/providers/index.ts',
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
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/shared/container/providers/StorageProvider/index.ts')) {
    appendFile(
      'src/shared/container/providers/StorageProvider/index.ts',
      createStorageIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/StorageProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/StorageProvider/index.ts',
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
