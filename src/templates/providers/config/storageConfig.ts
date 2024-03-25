export class CreateStorageConfig {
  public execute(): string {
    return `import { randomBytes } ${'from'} 'node:crypto';
import { StorageEngine, diskStorage } ${'from'} 'multer';
import { resolve } ${'from'} 'node:path';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

interface IStorageConfigDTO {
  readonly driver: 'disk' | 's3';
  readonly config: {
    readonly tmpFolder: string;
    readonly uploadsFolder: string;
    readonly disk: object;
    readonly aws: {
      readonly bucket: string;
      readonly user: string;
      readonly password: string;
      readonly region: string;
    };
    readonly multer: {
      readonly storage: StorageEngine;
    };
  };
}

export const storageConfig = Object.freeze<IStorageConfigDTO>({
  driver: process.env.STORAGE_DRIVER,
  config: {
    tmpFolder,
    uploadsFolder: resolve(tmpFolder, 'uploads'),
    disk: {},
    aws: {
      bucket: process.env.STORAGE_BUCKET,
      user: process.env.STORAGE_USER,
      password: process.env.STORAGE_PASS,
      region: process.env.STORAGE_REGION,
    },
    multer: {
      storage: diskStorage({
        destination: tmpFolder,
        filename(_request, file, callback) {
          const fileHash = randomBytes(10).toString('hex');
          const fileName = \`\${fileHash}-\${file.originalname}\`;

          return callback(null, fileName);
        },
      }),
    },
  },
});
`;
  }
}
