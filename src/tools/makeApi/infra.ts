import messages from '@tools/messages';
import { existsSync, mkdirSync } from 'fs';

export async function makeInfra(): Promise<void> {
  if (!existsSync('src')) {
    mkdirSync('src');
  }
  if (!existsSync('src/config')) {
    mkdirSync('src/config');
  }
  if (!existsSync('src/@types')) {
    mkdirSync('src/@types');
  }
  if (!existsSync('src/dtos')) {
    mkdirSync('src/dtos');
  }
  if (!existsSync('src/assets')) {
    mkdirSync('src/assets');
  }
  if (!existsSync('src/middlewares')) {
    mkdirSync('src/middlewares');
  }
  if (!existsSync('src/modules')) {
    mkdirSync('src/modules');
  }
  if (!existsSync('src/routes')) {
    mkdirSync('src/routes');
  }
  if (!existsSync('src/shared')) {
    mkdirSync('src/shared');
  }
  if (!existsSync('src/utils')) {
    mkdirSync('src/utils');
  }
  if (!existsSync('src/utils/mappers')) {
    mkdirSync('src/utils/mappers');
  }
  if (!existsSync('src/shared/container')) {
    mkdirSync('src/shared/container');
  }
  if (!existsSync('src/shared/errors')) {
    mkdirSync('src/shared/errors');
  }
  if (!existsSync('src/shared/typeorm')) {
    mkdirSync('src/shared/typeorm');
  }
  if (!existsSync('src/shared/container/providers')) {
    mkdirSync('src/shared/container/providers');
  }
  if (!existsSync('src/shared/typeorm/migrations')) {
    mkdirSync('src/shared/typeorm/migrations');
  }
  if (!existsSync('src/shared/typeorm/seeds')) {
    mkdirSync('src/shared/typeorm/seeds');
  }
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    messages.apiCreated,
    '\x1b[0m',
  );
}
