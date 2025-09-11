export class CreateEnvNamespace {
  public execute(): string {
    return `declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_PORT: number;
    readonly API_URL: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly ALLOWED_DOMAINS: string;
    readonly MYSQL_HOST: string;
    readonly MYSQL_PORT: number;
    readonly MYSQL_USER: string;
    readonly MYSQL_PASSWORD: string;
    readonly MYSQL_DATABASE: string;
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: number;
    readonly REDIS_PASSWORD: string;
    readonly REDIS_PREFIX: string;
    readonly CRYPTO_SECRET_KEY: string;
    readonly JWT_LIFETIME: import('@dtos/IIntervalDTO').IIntervalDTO;
    readonly HASH_SECRET_KEY: number;
    readonly STORAGE_DRIVER: 'disk' | 's3';
    readonly S3_BUCKET: string;
    readonly S3_USER: string;
    readonly S3_PASS: string;
    readonly S3_REGION: string;
    readonly MAIL_DRIVER: 'smtp' | 'ses';
    readonly MAIL_NAME: string;
    readonly MAIL_ADDRESS: string;
    readonly SMTP_HOST: string;
    readonly SMTP_PORT: number;
    readonly SMTP_SECURE: 'true' | 'false';
    readonly SMTP_USER: string;
    readonly SMTP_PASSWORD: string;
    readonly SES_USER: string;
    readonly SES_PASSWORD: string;
    readonly SES_REGION: string;
    readonly QUEUE_DRIVER: 'kue' | 'bull' | 'bee';
    readonly NOTIFICATION_DRIVER: 'firebase' | 'onesignal';
    readonly FIREBASE_API_URL: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_CLIENT_EMAIL: string;
    readonly ONESIGNAL_API_URL: string;
    readonly ONESIGNAL_APP_ID: string;
    readonly ONESIGNAL_TOKEN: string;
    readonly RDSTATION_API_URL: string;
    readonly RDSTATION_CLIENT_ID: string;
    readonly RDSTATION_CLIENT_SECRET: string;
    readonly RDSTATION_CODE: string;
    readonly RDSTATION_PUBLIC_API_KEY: string;
  }
}
`;
  }
}
