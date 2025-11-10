export class CreateStorageConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { randomBytes } fr\om 'node:crypto';
import { type StorageEngine, diskStorage } fr\om 'multer';
import { resolve, extname } fr\om 'node:path';
import { slugify } fr\om '@utils/slugify';

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

const storageValidator = Joi.object<IStorageConfigDTO>({
  driver: Joi.string().valid('disk', 's3').required(),
  config: Joi.object<IStorageConfigDTO['config']>({
    tmpFolder: Joi.string().required(),
    uploadsFolder: Joi.string().required(),
    s3: Joi.object<IStorageConfigDTO['config']['s3']>({
      bucket: Joi.string().allow('').required(),
      user: Joi.string().allow('').required(),
      password: Joi.string().allow('').required(),
      region: Joi.string()
        .valid(
          'us-east-1',
          'us-east-2',
          'us-west-1',
          'us-west-2',
          'ca-central-1',
          'eu-west-1',
          'eu-west-2',
          'eu-west-3',
          'eu-central-1',
          'eu-central-2',
          'eu-north-1',
          'eu-south-1',
          'ap-south-1',
          'ap-south-2',
          'ap-northeast-1',
          'ap-northeast-2',
          'ap-northeast-3',
          'ap-southeast-1',
          'ap-southeast-2',
          'ap-southeast-3',
          'me-south-1',
          'me-central-1',
          'il-central-1',
          'af-south-1',
          'sa-east-1',
          'us-gov-west-1',
          'us-gov-east-1',
        )
        .allow('')
        .required(),
    }),
    multer: Joi.object<IStorageConfigDTO['config']['multer']>({
      storage: Joi.any().required(),
    }).required(),
  }).required(),
});

export const storageConfig = Object.freeze<IStorageConfigDTO>({
  driver: process.env.STORAGE_DRIVER,
  config: {
    tmpFolder,
    uploadsFolder: resolve(tmpFolder, 'uploads'),
    s3: {
      bucket: process.env.S3_BUCKET,
      user: process.env.S3_USER,
      password: process.env.S3_PASSWORD,
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

storageValidator.validateAsync(storageConfig);
`;
  }
}
