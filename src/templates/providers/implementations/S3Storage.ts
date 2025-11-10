export class CreateS3Storage {
  public execute(): string {
    return `import { storageConfig } fr\om '@config/storage';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} fr\om '@aws-sdk/client-s3';
import { createReadStream, unlinkSync } fr\om 'node:fs';
import { getType } fr\om 'mime';
import { resolve } fr\om 'node:path';
import { AppError } fr\om '@shared/errors/AppError';
import type { IStorageProvider } fr\om '../models/IStorageProvider';

export class S3StorageProvider implements IStorageProvider {
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
