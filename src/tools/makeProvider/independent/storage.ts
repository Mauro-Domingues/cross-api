import fs from 'fs';
import createUploadConfig from '../../../templates/providers/config/uploadConfig';
import createFakeStorage from '../../../templates/providers/fakes/fakeStorage';
import createDiskStorage from '../../../templates/providers/implementations/DiskStorage';
import createS3Storage from '../../../templates/providers/implementations/S3Storage';
import createIStorage from '../../../templates/providers/models/IStorage';
import createStorageIndex from '../../../templates/providers/storageIndex';
import messages from '../../messages';

export default async function makeStorageProvider(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/container/providers/StorageProvider')) {
    fs.mkdirSync('src/shared/container/providers/StorageProvider');
  }
  if (!fs.existsSync('src/shared/container/providers/StorageProvider/fakes')) {
    fs.mkdirSync('src/shared/container/providers/StorageProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/StorageProvider/implementations',
    )
  ) {
    fs.mkdirSync(
      'src/shared/container/providers/StorageProvider/implementations',
    );
  }
  if (!fs.existsSync('src/shared/container/providers/StorageProvider/models')) {
    fs.mkdirSync('src/shared/container/providers/StorageProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `import './StorageProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/upload.ts')) {
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync('src/shared/container/providers/StorageProvider/index.ts')
  ) {
    fs.appendFile(
      'src/shared/container/providers/StorageProvider/index.ts',
      createStorageIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/StorageProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
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
