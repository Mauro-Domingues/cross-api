export class CreateS3Storage {
  public execute(): string {
    return `import { storageConfig } ${'from'} '@config/storage';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} ${'from'} '@aws-sdk/client-s3';
import { createReadStream, unlinkSync } ${'from'} 'node:fs';
import { getType } ${'from'} 'mime';
import { resolve } ${'from'} 'node:path';
import { AppError } ${'from'} '@shared/errors/AppError';
import { IStorageProvider } ${'from'} '../models/IStorageProvider';

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

    const ContentType = getType(originalPath);

    if (!ContentType) {
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
          ContentType,
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
