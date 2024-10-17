export class CreateStorageConfig {
  public execute(): string {
    return `import { randomBytes } ${'from'} 'node:crypto';
import { StorageEngine, diskStorage } ${'from'} 'multer';
import { resolve, extname } ${'from'} 'node:path';
import { slugify } ${'from'} '@utils/slugify';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

interface IStorageConfigDTO {
  readonly driver: 'disk' | 's3';
  readonly config: {
    readonly tmpFolder: string;
    readonly uploadsFolder: string;
    readonly s3: {
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
    s3: {
      bucket: process.env.S3_BUCKET,
      user: process.env.S3_USER,
      password: process.env.S3_PASS,
      region: process.env.S3_REGION,
    },
    multer: {
      storage: diskStorage({
        destination: tmpFolder,
        filename(_request, file, callback) {
          const fileHash = randomBytes(10).toString('hex');
          const extension = extname(file.originalname);
          const name = slugify(
            file.originalname.replace(new RegExp(\`\${extension}$\`), ''),
          );

          const fileName = fileHash.concat('-', name as string, extension);

          return callback(null, fileName);
        },
      }),
    },
  },
});
`;
  }
}
