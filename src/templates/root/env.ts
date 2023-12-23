export class CreateEnv {
  public execute(): string {
    return `# Api
PORT=3333
API_URL=http://localhost:3333
WEB_URL=http://localhost:3000
NODE_ENV=development

# Auth
JWT_LIFETIME=1d

# Crypto
CRYPTO_SECRET_KEY=

# Hash
HASH_SECRET_KEY=10

# Mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=12345
MYSQL_ROOT_PASSWORD=12345
MYSQL_DATABASE=database

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=12345
REDIS_PREFIX=api

# Upload
STORAGE_DRIVER=disk
#STORAGE_DRIVER=s3
STORAGE_BUCKET=
STORAGE_USER=
STORAGE_PASS=
STORAGE_REGION=us-east-1

# Mail
MAIL_DRIVER=nodemailer
#MAIL_DRIVER=ses
MAIL_PORT=
MAIL_HOST=
MAIL_SECURE=
MAIL_ADRESS=no-reply@admin.com
MAIL_NAME=Administrator
MAIL_USER=
MAIL_PASS=
MAIL_REGION=us-east-1

# Queue
QUEUE_DRIVER=bull

# Notification
NOTIFICATION_PROVIDER=firebase
# NOTIFICATION_PROVIDER=onesignal

# Firebase
FIREBASE_API_URL=https://fcm.googleapis.com
FIREBASE_API_KEY=

# One Signal
OS_API_URL=https://onesignal.com
OS_APP_ID=
OS_TOKEN=

# RDStation
RD_API_URL=https://api.rd.services
RD_PUBLIC_API_KEY=
RD_CLIENT_SECRET=
RD_CLIENT_ID=
RD_CODE=`;
  }
}
