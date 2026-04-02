export class CreateS3Storage {
  public execute(): string {
    return `import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} fr\u006Fm '@aws-sdk/client-s3';
import { getType } fr\u006Fm 'mime';
import { createReadStream, unlinkSync } fr\u006Fm 'node:fs';
import { resolve } fr\u006Fm 'node:path';
import { storageConfig } fr\u006Fm '@config/storage';
import { AppError } fr\u006Fm '@shared/errors/AppError';
import type { IStorageProvider } fr\u006Fm '../models/IStorageProvider';

export class S3Provider implements IStorageProvider {
  private readonly client: S3Client;

  public constructor() {
    this.client = new S3Client({
      credentials: {
        accessKeyId: storageConfig.config.s3.user,
        secretAccessKey: storageConfig.config.s3.password,
      },
      region: storageConfig.config.s3.region,
    });
  }

  public async saveFile(file: string): Promise<void> {
    const originalPath = resolve(storageConfig.config.tmpFolder, file);

    const contentType = getType(originalPath);

    if (!contentType) {
      throw new AppError('FILE_NOT_FOUND', 'File not found', 404);
    }

    const fileStream = createReadStream(originalPath);

    try {
      await this.client.send(
        new PutObjectCommand({
          Bucket: storageConfig.config.s3.bucket,
          Key: file,
          ACL: 'public-read',
          Body: fileStream,
          ContentType: contentType,
        }),
      );
    } finally {
      unlinkSync(originalPath);
    }
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client.send(
      new DeleteObjectCommand({
        Bucket: storageConfig.config.s3.bucket,
        Key: file,
      }),
    );
  }
}
`;
  }
}
