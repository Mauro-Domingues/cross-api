import { createBabelConfig } from '@templates/root/babelConfig';
import { createDockerCompose } from '@templates/root/dockerCompose';
import { createEditorConfig } from '@templates/root/editorConfig';
import { createEnv } from '@templates/root/env';
import { createEsLintIgnore } from '@templates/root/esLintIgnore';
import { createEsLintrcJson } from '@templates/root/esLintrcJson';
import { createGitIgnore } from '@templates/root/gitIgnore';
import { createJestConfig } from '@templates/root/jestConfig';
import { createNodemonJson } from '@templates/root/nodemonJson';
import { createPrettierConfig } from '@templates/root/prettierConfig';
import { createTsConfig } from '@templates/root/tsConfig';
import messages from '@tools/messages';
import { appendFile, existsSync, truncate } from 'fs';

export async function makeFirstLayer(): Promise<void> {
  if (!existsSync('.editorconfig')) {
    appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .editorconfig ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('.env')) {
    appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.env', error => {
      if (error) console.log(error);
    });
    appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env ${messages.created}`, '\x1b[0m');
  if (!existsSync('.env.template')) {
    appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.env.template', error => {
      if (error) console.log(error);
    });
    appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .env.template ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('.eslintignore')) {
    appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('.eslintrc.json')) {
    appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintrc.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('.gitignore')) {
    appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  } else {
    truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .gitignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('babel.config.js')) {
    appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- babel.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('docker-compose.yml')) {
    appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  } else {
    truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- docker-compose.yml ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('jest.config.ts')) {
    appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- jest.config.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('nodemon.json')) {
    appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  } else {
    truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- nodemon.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('prettier.config.js')) {
    appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- prettier.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('tsconfig.json')) {
    appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- tsconfig.json ${messages.created}`,
    '\x1b[0m',
  );
}
