export class CreateEnvNamespace {
  public execute(): string {
    return `declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    API_URL: string;
    WEB_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
    JWT_LIFETIME: string;
    CRYPTO_SECRET_KEY: string;
    HASH_SECRET_KEY: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    MYSQL_HOST: string;
    MYSQL_PORT: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_ROOT_PASSWORD: string;
    MYSQL_DATABASE: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    STORAGE_DRIVER: 'disk' | 's3';
    MAIL_DRIVER: 'ethereal' | 'ses';
    MAIL_PORT: string;
    MAIL_HOST: string;
    MAIL_USER: string;
    MAIL_PASS: string;
    MAIL_ADRESS: string;
    MAIL_NAME: string;
    SENTRY_DSN: string;
    OS_APP_ID: string;
    OS_API_URL: string;
    OS_TOKEN: string;
    RD_API_URL: string;
    RD_CLIENT_ID: string;
    RD_CLIENT_SECRET: string;
    RD_CODE: string;
    RD_PUBLIC_API_KEY: string;
    AWS_BUCKET: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_REGION: string;
  }
}
`;
  }
}
