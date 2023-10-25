import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

interface IOptionDTO {
  title: string;
  description: string;
}

export class Board {
  private readonly structureOptions: Array<IOptionDTO>;
  private readonly toolOptions: Array<IOptionDTO>;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

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

  private renderEmptyLine(): void {
    return this.console.one([
      '|                                                                                                                   |',
      'blue',
      true,
      false,
      false,
    ]);
  }

  private renderHeader(): void {
    return this.console.one([
      ` /==============================================${this.messages.comandTitle}==============================================\\`,
      'blue',
      true,
      true,
      false,
    ]);
  }

  private renderToolOptions(): void {
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
    return this.toolOptions.forEach(tool => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [`   ➤  ${tool.title}            `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [`${tool.description}   `, 'white', false, false, false],
        ['                          |   ', 'blue', true, false, false],
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderStructureOptions(): void {
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
    return this.structureOptions.forEach(structure => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [`   ➤  ${structure.title}   `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [`${structure.description}   `, 'white', false, false, false],
        ['|   ', 'blue', true, false, false],
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.one([
      ` \\=================================================================================================================/`,
      'blue',
      true,
      false,
      true,
    ]);
  }

  public execute(): void {
    this.renderHeader();
    this.renderToolOptions();
    this.renderStructureOptions();
    return this.renderFooter();
  }
}
