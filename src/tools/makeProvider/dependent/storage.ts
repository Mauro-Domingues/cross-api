import fs from 'fs';
import createContainer from '@templates/index/container';
import createUploadConfig from '@templates/providers/config/uploadConfig';
import createFakeStorage from '@templates/providers/fakes/fakeStorage';
import createDiskStorage from '@templates/providers/implementations/DiskStorage';
import createS3Storage from '@templates/providers/implementations/S3Storage';
import createIStorage from '@templates/providers/models/IStorage';
import createStorageIndex from '@templates/providers/storageIndex';
import messages from '@tools/messages';
import IModuleNamesDTO from 'index';

export default async function makeDependentStorageProvider(
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)
  ) {
    fs.mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
    );
  }
  fs.appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  fs.appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './StorageProvider';`,
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
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      createFakeStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      createDiskStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      createS3Storage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      createIStorage(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      createStorageIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
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
