export default function createEnv(): string {
  return `# App
APP_PORT=3333
APP_API_URL=http://localhost:3333
APP_WEB_URL=http://localhost:3000
NODE_ENV=development

# Auth
APP_SECRET=

# Crypto
CRYPTO_SECRET_KEY=

# Mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_ROOT_PASSWORD=

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# File upload
STORAGE_DRIVER=disk

# Mail
MAIL_DRIVER=ethereal
MAIL_PORT=2525
MAIL_HOST=smtp.mailtrap.io
MAIL_USER=
MAIL_PASS=
MAIL_ADRESS=
MAIL_NAME

# Sentry
SENTRY_DSN=

# One Signal
OS_APP_ID=
OS_TOKEN=

# AWS
AWS_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Pagar.Me
PGM_API_URL=
PGM_APP_KEY=`;
}
