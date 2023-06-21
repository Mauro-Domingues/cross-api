export class CreateS3Storage {
  public execute(): string {
    return `import { uploadConfig } from '@config/upload';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { readFileSync, unlinkSync } from 'fs';
import { getType } from 'mime';
import { resolve } from 'path';

import { AppError } from '@shared/errors/AppError';

import { IStorageProviderDTO } from '../models/IStorageProvider';

export class S3StorageProvider implements IStorageProviderDTO {
  private readonly client: S3Client;

  constructor() {
    this.client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      region: process.env.AWS_REGION,
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = resolve(uploadConfig.tmpFolder, file);

    const ContentType = getType(originalPath);

    if (!ContentType) {
      throw new AppError('File not found', 404);
    }

    const fileContent = readFileSync(originalPath);

    await this.client.send(
      new PutObjectCommand({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      }),
    );

    unlinkSync(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client.send(
      new DeleteObjectCommand({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
      }),
    );
  }
}
`;
  }
}
