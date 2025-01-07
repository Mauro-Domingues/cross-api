export class CreateEnv {
  public execute(): string {
    return `# Api
API_PORT=3333
API_URL=http://localhost:3333
ALLOWED_DOMAINS=[https://example.com,https://other-example.com]
NODE_ENV=development

# Mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=database

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_PREFIX=api

# Crypto
CRYPTO_SECRET_KEY=
JWT_LIFETIME=1d

# Hash
HASH_SECRET_KEY=10

# Storage (disk | s3)
STORAGE_DRIVER=disk

# S3
S3_BUCKET=
S3_USER=
S3_PASSWORD=
S3_REGION=

# Mail (smtp | ses)
MAIL_DRIVER=smtp
MAIL_NAME=Administrator
MAIL_ADDRESS=no-reply@admin.com

# Smtp
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASSWORD=

# Ses
SES_USER=
SES_PASSWORD=
SES_REGION=

# Queue (bee | bull | kue)
QUEUE_DRIVER=bull

# Notification (firebase | onesignal)
NOTIFICATION_DRIVER=firebase

# Firebase
FIREBASE_API_URL=https://fcm.googleapis.com
FIREBASE_API_KEY=

# One Signal
ONESIGNAL_API_URL=https://onesignal.com
ONESIGNAL_APP_ID=
ONESIGNAL_TOKEN=

# RDStation
RDSTATION_API_URL=https://api.rd.services
RDSTATION_PUBLIC_API_KEY=
RDSTATION_CLIENT_SECRET=
RDSTATION_CLIENT_ID=
RDSTATION_CODE=
`;
  }
}
