"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDockerCompose;
function createDockerCompose() {
  return `version: '3'

services:
  database:
    image: mysql
    restart: unless-stopped
    container_name: mysql
    command: --default-authentication-plugin=mysql_native_password
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