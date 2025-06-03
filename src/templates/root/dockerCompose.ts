export class CreateDockerCompose {
  public execute(): string {
    return `services:
  app:
    build: .
    restart: unless-stopped
    container_name: app
    ports:
      - 3333:\${API_PORT}
    env_file:
      - .env
    environment:
      - NODE_ENV=production
      - MYSQL_HOST=mysql
      - REDIS_HOST=redis
    depends_on:
      - mysql
      - redis
    volumes:
      - jwks:/app/dist/assets/.well-known
      - keys:/app/dist/keys
      - tmp:/app/tmp
    networks:
      - cross-network

  mysql:
    image: mysql:latest
    restart: unless-stopped
    container_name: mysql
    ports:
      - 3306:\${MYSQL_PORT}
    env_file:
      - .env
    volumes:
      - mysql:/var/lib/mysql
    networks:
      - cross-network

  redis:
    image: bitnami/redis
    restart: unless-stopped
    container_name: redis
    ports:
      - 6379:\${REDIS_PORT}
    env_file:
      - .env
    networks:
      - cross-network

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
