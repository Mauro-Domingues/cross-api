export class CreateDockerCompose {
  public execute(): string {
    return `services:
  app:
    container_name: app
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    networks:
      - cross-network
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    env_file:
      - .env
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
        - curl -s -o /dev/null http://localhost:$API_PORT || exit 1
      start_period: 10s
      interval: 10s
      timeout: 5s
      retries: 5
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: 3

  mysql:
    container_name: mysql
    image: mysql:latest
    restart: unless-stopped
    networks:
      - cross-network
    env_file:
      - .env
    volumes:
      - mysql:/var/lib/mysql
    ports:
      - \${MYSQL_PORT}:3306
    healthcheck:
      test:
        - CMD
        - mysqladmin
        - ping
        - -p\${MYSQL_ROOT_PASSWORD}
      interval: 10s
      timeout: 5s
      retries: 3
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: 3

  redis:
    container_name: redis
    image: bitnami/redis
    restart: unless-stopped
    networks:
      - cross-network
    env_file:
      - .env
    ports:
      - \${REDIS_PORT}:6379
    healthcheck:
      test:
        - CMD
        - redis-cli
        - -a
        - \${REDIS_PASSWORD}
        - ping
      interval: 10s
      timeout: 5s
      retries: 3
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: 3

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
