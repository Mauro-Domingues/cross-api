export class CreateUploadConfig {
  public execute(): string {
    return `import { randomBytes } from 'crypto';
import { StorageEngine, diskStorage } from 'multer';
import { resolve } from 'path';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfigDTO {
  driver: 'disk' | 's3';
  tmpFolder: string;
  uploadsFolder: string;
  multer: {
    storage: StorageEngine;
  };
  config: { disk: object; aws: { bucket: string } };
}

export const uploadConfig: IUploadConfigDTO = {
  driver: process.env.STORAGE_DRIVER,
  tmpFolder,
  uploadsFolder: resolve(tmpFolder, 'uploads'),
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
  config: {
    disk: {},
    aws: {
      bucket: process.env.AWS_BUCKET,
    },
  },
};
`;
  }
}
