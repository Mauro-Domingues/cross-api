import board from './src/tools/board';
import configLanguage from './src/tools/languageConfig';
import makeApi from './src/tools/makeAPi';
import messages from './src/tools/messages';

const [comand] = process.argv.slice(2);
const [arg] = process.argv.slice(3);
const [father] = process.argv.slice(4);

class GetName {
  getModuleName(name: string) {
    const lowerModuleName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;
    const upperModuleName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

    const pluralModuleName =
      lowerModuleName.slice(-1) === 's'
        ? lowerModuleName
        : `${lowerModuleName}s`;

    let dbModuleName = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const letter of pluralModuleName) {
      if (letter === letter.toUpperCase()) {
        dbModuleName = `${dbModuleName}_${letter.toLowerCase()}`;
      } else {
        dbModuleName = `${dbModuleName}${letter}`;
      }
    }

    return {
      lowerModuleName,
      upperModuleName,
      pluralModuleName,
      dbModuleName,
    };
  }
}

if (comand) {
  switch (comand) {
    case 'comands':
      board();
      break;
    case 'language':
      configLanguage();
      break;
    case 'list:provider':
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.available,
        '\x1b[0m',
      );
      break;
    case 'make:api':
      makeApi();
      break;
    case 'make:module':
      if (father) {
        // makeDependentModule(
        //   new GetName().getModuleName(arg),
        //   new GetName().getModuleName(father),
        // );
        console.log(
          '\x1b[1m',
          '\x1b[38;2;255;0;0m',
          messages.available,
          '\x1b[0m',
        );
      }
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.available,
        '\x1b[0m',
      );
      // makeIndependentModule(new GetName().getModuleName(arg));
      break;
    case 'make:provider':
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.available,
        '\x1b[0m',
      );
      // makeProvider(new GetName().getModuleName(arg));
      break;
    default:
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.notFound,
        '\x1b[0m',
      );
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', messages.try, '\x1b[0m');
      console.log('');
      break;
  }
} else {
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;0;0m', messages.notFound, '\x1b[0m');
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;255;0m', messages.try, '\x1b[0m');
  console.log('');
}
