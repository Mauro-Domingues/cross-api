import messages from './messages';

export default function board(): void {
  const trace = '\\';
  console.log('');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` /===============================================${messages.comandTitle}================================================${trace}`,
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;0;255;155m',
    ` 〇 ${messages.tools}`,
    '\x1b[38;2;0;155;255m',
    '                                                                                                   |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  comands                    ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.comands}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '                            |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  language                   ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.changeLanguage}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '                                          |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  list:provider              ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.listProvider}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '                          |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;0;255;155m',
    ` 〇 ${messages.structure}`,
    '\x1b[38;2;0;155;255m',
    '                                                                                          |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  make:api                   ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.makeApi}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '                           |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  make:module [name]         ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.makeModule}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '          |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  make:module [name] [father]',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.makeModuleD}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[38;2;255;255;0m',
    '   ➤  make:provider [name]       ',
    '\x1b[38;2;0;155;255m',
    '|',
    '\x1b[0m',
    `${messages.makeProvider}`,
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '                                         |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` ${trace}====================================================================================================================/`,
    '\x1b[0m',
  );
  console.log('');
}
