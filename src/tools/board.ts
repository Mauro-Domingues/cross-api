import messages from './messages';

function renderEmptyLine() {
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                                                                                      |',
    '\x1b[0m',
  );
}

export default function board(): void {
  const tools = [
    { title: 'comands      ', description: messages.comands },
    { title: 'language     ', description: messages.changeLanguage },
    { title: 'list:provider', description: messages.listProvider },
  ];

  const structure = [
    { title: 'make:api                   ', description: messages.makeApi },
    { title: 'make:module [name]         ', description: messages.makeModule },
    { title: 'make:module [name] [father]', description: messages.makeModuleD },
    {
      title: 'make:provider [name]       ',
      description: messages.makeProvider,
    },
  ];

  console.log('');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` /===============================================${messages.comandTitle}================================================\\`,
    '\x1b[0m',
  );
  renderEmptyLine();
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
  renderEmptyLine();
  tools.forEach(tool => {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;255;255;0m',
      `   ➤  ${tool.title}              `,
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[0m',
      `${tool.description}`,
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '                          |',
      '\x1b[0m',
    );
    renderEmptyLine();
  });
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
  renderEmptyLine();
  structure.forEach(structure => {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;255;255;0m',
      `   ➤  ${structure.title}`,
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[0m',
      `${structure.description}`,
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[0m',
    );
    renderEmptyLine();
  });
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` \\====================================================================================================================/`,
    '\x1b[0m',
  );
  console.log('');
}
