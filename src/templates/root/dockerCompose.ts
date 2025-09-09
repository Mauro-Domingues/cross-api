export class CreateDockerCompose {
  public execute(): string {
    return `services:
  app:
    container_name: app
    build: .
    restart: unless-stopped
    ports:
      - 3333:\${API_PORT}
    env_file:
      - .env
    environment:
      - NODE_ENV=production
      - MYSQL_HOST=mysql
      - REDIS_HOST=redis
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - jwks:/app/dist/assets/.well-known
      - keys:/app/dist/keys
      - tmp:/app/tmp
    networks:
      - cross-network

  mysql:
    container_name: mysql
    image: mysql:latest
    restart: unless-stopped
    ports:
      - 3306:\${MYSQL_PORT}
    env_file:
      - .env
    volumes:
      - mysql:/var/lib/mysql
    networks:
      - cross-network
    healthcheck:
      test:
        - CMD
        - mysqladmin
        - ping
        - '-p\${MYSQL_ROOT_PASSWORD}'
      interval: 10s
      timeout: 5s
      retries: 3

  redis:
    container_name: redis
    image: bitnami/redis
    restart: unless-stopped
    ports:
      - 6379:\${REDIS_PORT}
    env_file:
      - .env
    networks:
      - cross-network
    healthcheck:
      test:
        - CMD
        - redis-cli
        - ping
        - '-p\${REDIS_PASSWORD}'
      interval: 10s
      timeout: 5s
      retries: 3

networks:
  cross-network:
    driver: bridge

volumes:
  mysql: {}
  keys: {}
  jwks: {}
  tmp: {}
`;
  }
}
