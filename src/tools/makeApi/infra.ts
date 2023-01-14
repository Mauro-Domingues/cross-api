import fs from 'fs';
import messages from '../messages';

export default async function makeInfra(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/@types')) {
    fs.mkdirSync('src/@types');
  }
  if (!fs.existsSync('src/assets')) {
    fs.mkdirSync('src/assets');
  }
  if (!fs.existsSync('src/dtos')) {
    fs.mkdirSync('src/dtos');
  }
  if (!fs.existsSync('src/middlewares')) {
    fs.mkdirSync('src/middlewares');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/routes')) {
    fs.mkdirSync('src/routes');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/utils')) {
    fs.mkdirSync('src/utils');
  }
  if (!fs.existsSync('src/utils/mappers')) {
    fs.mkdirSync('src/utils/mappers');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/errors')) {
    fs.mkdirSync('src/shared/errors');
  }
  if (!fs.existsSync('src/shared/typeorm')) {
    fs.mkdirSync('src/shared/typeorm');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/typeorm/migrations')) {
    fs.mkdirSync('src/shared/typeorm/migrations');
  }
  if (!fs.existsSync('src/shared/typeorm/seeds')) {
    fs.mkdirSync('src/shared/typeorm/seeds');
  }
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    messages.apiCreated,
    '\x1b[0m',
  );
}
