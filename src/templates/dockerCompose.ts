export default function createDockerCompose(): string {
  return `version: '3'

services:
  database:
    image: mysql
    restart: unless-stopped
    container_name: mysql
    ports:
      - '3306:3306'
    env_file:
      - .env
    networks:
      - rs-network

  redis:
    image: bitnami/redis
    restart: unless-stopped
    container_name: redis
    ports:
      - 6379:6379
    env_file:
      - .env
    networks:
      - rs-network

networks:
  rs-network:
    driver: bridge`;
}
