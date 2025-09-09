export class CreateDockerCompose {
  public execute(): string {
    return `services:
  app:
    container_name: app
    build: .
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
      - REDIS_HOST=redis
    volumes:
      - jwks:/app/dist/assets/.well-known
      - keys:/app/dist/keys
      - tmp:/app/tmp
    ports:
      - 3333:\${API_PORT}
    
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
      - 3306:\${MYSQL_PORT}
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
        max-size: 100m
        max-file: 10

  redis:
    container_name: redis
    image: bitnami/redis
    restart: unless-stopped
    networks:
      - cross-network
    env_file:
      - .env
    ports:
      - 6379:\${REDIS_PORT}
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
        max-size: 100m
        max-file: 10

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
    driver: bridge`;
  }
}
