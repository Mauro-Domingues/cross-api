export class CreateDockerCompose {
  public execute(): string {
    return `x-base: &base
  restart: unless-stopped
  networks:
    - cross-network
  env_file:
    - .env
  logging:
    driver: json-file
    options:
      max-size: 10m
      max-file: 3

services:
  app:
    <<: *base
    container_name: app
    build:
      context: .
      dockerfile: Dockerfile
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    environment:
      - NODE_ENV=production
      - MYSQL_HOST=mysql
      - MYSQL_PORT=3306
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    volumes:
      - jwks:/app/dist/assets/.well-known
      - keys:/app/dist/keys
      - tmp:/app/tmp
    ports:
      - \${EXTERNAL_API_PORT}:\${API_PORT}
    healthcheck:
      test:
        - CMD-SHELL
        - >
          curl --fail -s
          -H "Origin: $(echo $ALLOWED_DOMAINS | tr -d '[] ' | cut -d',' -f1)"
          http://localhost:$API_PORT/health > /dev/null || exit 1
      start_period: 10s
      interval: 10s
      timeout: 5s
      retries: 5

  mysql:
    <<: *base
    container_name: mysql
    image: mysql:latest
    volumes:
      - mysql:/var/lib/mysql
    ports:
      - \${MYSQL_PORT}:3306
    healthcheck:
      test:
        - CMD-SHELL
        - MYSQL_PWD=$MYSQL_ROOT_PASSWORD mysqladmin ping -h localhost
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    <<: *base
    container_name: redis
    image: redis:latest
    command: redis-server --requirepass $REDIS_PASSWORD
    ports:
      - \${REDIS_PORT}:6379
    healthcheck:
      test:
        - CMD-SHELL
        - REDISCLI_AUTH=$REDIS_PASSWORD redis-cli ping
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  mysql:
    driver: local
  keys:
    driver: local
  jwks:
    driver: local
  tmp:
    driver: local

networks:
  cross-network:
    driver: bridge
`;
  }
}
