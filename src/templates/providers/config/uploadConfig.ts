export class CreateUploadConfig {
  public execute(): string {
    return `import { randomBytes } ${'from'} 'node:crypto';
import { StorageEngine, diskStorage } ${'from'} 'multer';
import { resolve } ${'from'} 'node:path';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfigDTO {
  driver: 'disk' | 's3';
  config: {
    tmpFolder: string;
    uploadsFolder: string;
    disk: object;
    aws: { bucket: string; user: string; password: string; region: string };
    multer: {
      storage: StorageEngine;
    };
  };
}

export const uploadConfig: IUploadConfigDTO = {
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
};
`;
  }
}
