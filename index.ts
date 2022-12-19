import board from './src/tools/board';
import configLanguage from './src/tools/languageConfig';
import makeApi from './src/tools/makeAPi';
import messages from './src/tools/messages';

const [comand] = process.argv.slice(2);
const [arg] = process.argv.slice(3);
const [father] = process.argv.slice(4);

class GetName {
  getModuleName(name: string) {
    const lowerModuleName =
      name.slice(-1) === 's'
        ? `${name.slice(0, 1).toLowerCase()}${name.slice(1, -1)}`
        : `${name.slice(0, 1).toLowerCase()}${name.slice(1)}`;

    const upperModuleName =
      name.slice(-1) === 's'
        ? `${name.slice(0, 1).toUpperCase()}${name.slice(1, -1)}`
        : `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

    const pluralModuleName = `${lowerModuleName}s`;

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
      board();
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
      }
      // makeIndependentModule(new GetName().getModuleName(arg));
      break;
    case 'make:provider':
      // makeProvider(new GetName().getModuleName(arg));
      break;
    default:
      console.log('');
      console.table(messages.notFound);
      console.log('');
      console.table(messages.try);
      console.log('');
      break;
  }
} else {
  console.log('');
  console.table(messages.notFound);
  console.log('');
  console.table(messages.try);
  console.log('');
}
