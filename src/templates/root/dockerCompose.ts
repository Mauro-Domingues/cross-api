export class CreateDockerCompose {
  public execute(): string {
    return `services:
  mysql:
    image: mysql:5.7
    restart: unless-stopped
    container_name: mysql
    command: --default-authentication-plugin=mysql_native_password
    ports:
      - 3306:3306
    env_file:
      - .env
    environment:
      - MYSQL_USER=username
    volumes:
      - mysql:/var/lib/mysql
    networks:
      - cross-network

  redis:
    image: bitnami/redis
    restart: unless-stopped
    container_name: redis
    ports:
      - 6379:6379
    env_file:
      - .env
    networks:
      - cross-network

networks:
  cross-network:
    driver: bridge

volumes:
  mysql: {}`;
  }
}
