import createBabelConfig from '@templates/root/babelConfig';
import createDockerCompose from '@templates/root/dockerCompose';
import createEditorConfig from '@templates/root/editorConfig';
import createEnv from '@templates/root/env';
import createEsLintIgnore from '@templates/root/esLintIgnore';
import createEsLintrcJson from '@templates/root/esLintrcJson';
import createGitIgnore from '@templates/root/gitIgnore';
import createJestConfig from '@templates/root/jestConfig';
import createNodemonJson from '@templates/root/nodemonJson';
import createPrettierConfig from '@templates/root/prettierConfig';
import createTsConfig from '@templates/root/tsConfig';
import messages from '@tools/messages';
import fs from 'fs';

export default async function makeFirstLayer(): Promise<void> {
  if (!fs.existsSync('.editorconfig')) {
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .editorconfig ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.env')) {
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.env', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env ${messages.created}`, '\x1b[0m');
  if (!fs.existsSync('.env.template')) {
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.env.template', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .env.template ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.eslintignore')) {
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.eslintrc.json')) {
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintrc.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.gitignore')) {
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .gitignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('babel.config.js')) {
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- babel.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('docker-compose.yml')) {
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- docker-compose.yml ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('jest.config.ts')) {
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- jest.config.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('nodemon.json')) {
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- nodemon.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('prettier.config.js')) {
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- prettier.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('tsconfig.json')) {
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- tsconfig.json ${messages.created}`,
    '\x1b[0m',
  );
}
