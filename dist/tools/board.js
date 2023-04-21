import { Messages } from './messages.js';
import { Console } from './console.js';

export class Board {
  messages;
  console;
  toolOptions;
  ormOptions;
  structureOptions;
  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.toolOptions = [
      { title: 'comands             ', description: this.messages.comands },
      {
        title: 'language            ',
        description: this.messages.changeLanguage,
      },
      {
        title: 'list:provider       ',
        description: this.messages.listProvider,
      },
    ];
    this.ormOptions = [
      {
        title: 'migration:generate           ',
        description: this.messages.migrationGenerate,
      },
      {
        title: 'migration:run                ',
        description: this.messages.migrationRun,
      },
    ];
    this.structureOptions = [
      {
        title: 'make:api                     ',
        description: this.messages.makeApi,
      },
      {
        title: 'make:module [name]           ',
        description: this.messages.makeModule,
      },
      {
        title: 'make:module [name] [father]  ',
        description: this.messages.makeModuleD,
      },
      {
        title: 'make:provider [name]         ',
        description: this.messages.makeProvider,
      },
      {
        title: 'make:provider [name] [father]',
        description: this.messages.makeProviderD,
      },
      {
        title: 'revert                       ',
        description: this.messages.undo,
      },
    ];
  }
  renderEmptyLine() {
    this.console.one([
      '|                                                                                                                   |',
      'blue',
      true,
      false,
      false,
    ]);
  }
  renderHeader() {
    this.console.one([
      ` /==============================================${this.messages.comandTitle}==============================================\\`,
      'blue',
      true,
      true,
      false,
    ]);
  }
  renderToolOptions() {
    this.renderEmptyLine();
    this.console.many([
      ['|   ', 'blue', true, false, false],
      [` 〇 ${this.messages.tools}   `, 'green', true, false, false],
      [
        '                                                                                                  |',
        'blue',
        true,
        false,
        false,
      ],
    ]);
    this.renderEmptyLine();
    this.toolOptions.forEach(tool => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [`   ➤  ${tool.title}            `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [`${tool.description}   `, 'white', false, false, false],
        ['                          |   ', 'blue', true, false, false],
      ]);
      this.renderEmptyLine();
    });
  }
  renderOrmOptions() {
    this.console.many([
      ['|   ', 'blue', true, false, false],
      [` 〇 ORM   `, 'green', true, false, false],
      [
        '                                                                                                          |   ',
        'blue',
        true,
        false,
        false,
      ],
    ]);
    this.renderEmptyLine();
    this.ormOptions.forEach(orm => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [`   ➤  ${orm.title}   `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [`${orm.description}   `, 'white', false, false, false],
        ['|   ', 'blue', true, false, false],
      ]);
      this.renderEmptyLine();
    });
  }
  renderStructureOptions() {
    this.console.many([
      ['|   ', 'blue', true, false, false],
      [` 〇 ${this.messages.structure}   `, 'green', true, false, false],
      [
        '                                                                                         |',
        'blue',
        true,
        false,
        false,
      ],
    ]);
    this.renderEmptyLine();
    this.structureOptions.forEach(structure => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [`   ➤  ${structure.title}   `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [`${structure.description}   `, 'white', false, false, false],
        ['|   ', 'blue', true, false, false],
      ]);
      this.renderEmptyLine();
    });
  }
  renderFooter() {
    this.console.one([
      ` \\=================================================================================================================/`,
      'blue',
      true,
      false,
      true,
    ]);
  }
  execute() {
    this.renderHeader();
    this.renderToolOptions();
    this.renderOrmOptions();
    this.renderStructureOptions();
    this.renderFooter();
  }
}
