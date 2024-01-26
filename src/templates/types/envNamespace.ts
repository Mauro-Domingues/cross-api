export class CreateEnvNamespace {
  public execute(): string {
    return `declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PORT: string;
    readonly API_URL: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly JWT_LIFETIME: string;
    readonly CRYPTO_SECRET_KEY: string;
    readonly HASH_SECRET_KEY: string;
    readonly MYSQL_HOST: string;
    readonly MYSQL_PORT: string;
    readonly MYSQL_USER: string;
    readonly MYSQL_PASSWORD: string;
    readonly MYSQL_ROOT_PASSWORD: string;
    readonly MYSQL_DATABASE: string;
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: string;
    readonly REDIS_PASSWORD: string;
    readonly REDIS_PREFIX: string;
    readonly STORAGE_DRIVER: 'disk' | 's3';
    readonly STORAGE_BUCKET: string;
    readonly STORAGE_USER: string;
    readonly STORAGE_PASS: string;
    readonly STORAGE_REGION: string;
    readonly MAIL_DRIVER: 'nodemailer' | 'ses';
    readonly MAIL_PORT: string;
    readonly MAIL_HOST: string;
    readonly MAIL_SECURE: 'true' | 'false';
    readonly MAIL_USER: string;
    readonly MAIL_PASS: string;
    readonly MAIL_ADRESS: string;
    readonly MAIL_NAME: string;
    readonly MAIL_REGION: string;
    readonly QUEUE_DRIVER: 'kue' | 'bull' | 'bee';
    readonly NOTIFICATION_DRIVER: 'firebase' | 'onesignal';
    readonly OS_API_URL: string;
    readonly OS_APP_ID: string;
    readonly OS_TOKEN: string;
    readonly FIREBASE_API_URL: string;
    readonly FIREBASE_API_KEY: string;
    readonly RD_API_URL: string;
    readonly RD_CLIENT_ID: string;
    readonly RD_CLIENT_SECRET: string;
    readonly RD_CODE: string;
    readonly RD_PUBLIC_API_KEY: string;
  }
}
`;
  }
}
