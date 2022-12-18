import messages from './messages';

export default async function board(): Promise<void> {
  const trace = '\\';
  console.log('');
  console.log(
    ` /===============================================${messages.comandTitle}================================================${trace}`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|  〇 ${messages.tools}                                                                                                      |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  comands                       | ${messages.comands}                                |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  language                      | ${messages.changeLanguage}                                              |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  list:provider                 | ${messages.listProvider}                              |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|  〇 ${messages.structure}                                                                                             |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  make:api                      | ${messages.makeApi}                               |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  make:module [name]            | ${messages.makeModule}              |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  make:module [name] [father]   | ${messages.makeModuleD}    |  `,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    `|    ➤  make:provider [name]          | ${messages.makeProvider}                                             |`,
  );
  console.log(
    '|                                                                                                                      |',
  );
  console.log(
    ` ${trace}=====================================================================================================================/`,
  );
  console.log('');
}
