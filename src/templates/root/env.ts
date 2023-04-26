export class CreateEnv {
  public execute(): string {
    return `# Api
PORT=3333
API_URL=http://localhost:3333
WEB_URL=http://localhost:3000
NODE_ENV=development

# Auth
JWT_LIFETIME=

# Crypto
CRYPTO_SECRET_KEY=

# Hash
HASH_SECRET_KEY=10

# DataSource config
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=12345
DB_DATABASE=database

# Mysql image
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=username
MYSQL_PASSWORD=12345
MYSQL_ROOT_PASSWORD=12345
MYSQL_DATABASE=database

# Redis image
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=12345

# File upload
STORAGE_DRIVER=disk
#STORAGE_DRIVER=s3

# Mail
MAIL_DRIVER=ethereal
#MAIL_DRIVER=ses
MAIL_PORT=2525
MAIL_HOST=smtp.mailtrap.io
MAIL_ADRESS=no-reply@admin.com
MAIL_NAME=Administrator
MAIL_USER=
MAIL_PASS=

# Sentry
SENTRY_DSN=

# One Signal
OS_APP_ID=
OS_API_URL=
OS_TOKEN=

# RDStation
RD_API_URL=https://api.rd.services
RD_PUBLIC_API_KEY=
RD_CLIENT_SECRET=
RD_CLIENT_ID=
RD_CODE=

# AWS
AWS_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1`;
  }
}
