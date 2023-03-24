import { IMessagesDTO, Messages } from '@tools/messages';

interface IOptionDTO {
  title: string;
  description: string;
}

export class Board {
  private messages: IMessagesDTO;
  private toolOptions: IOptionDTO[];
  private ormOptions: IOptionDTO[];
  private structureOptions: IOptionDTO[];

  constructor() {
    this.messages = new Messages().execute();
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
        title: 'migration:generate           ',
        description: this.messages.migrationGenerate,
      },
      {
        title: 'revert                       ',
        description: this.messages.undo,
      },
    ];
  }

  private renderEmptyLine(): void {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|                                                                                                                        |',
      '\x1b[0m',
    );
  }

  private renderToolOptions(): void {
    this.renderEmptyLine();
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;0;255;155m',
      ` 〇 ${this.messages.tools}`,
      '\x1b[38;2;0;155;255m',
      '                                                                                                     |',
      '\x1b[0m',
    );
    this.renderEmptyLine();
    this.toolOptions.forEach(tool => {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        '|',
        '\x1b[38;2;255;255;0m',
        `   ➤  ${tool.title}         `,
        '\x1b[38;2;0;155;255m',
        '|',
        '\x1b[0m',
        `${tool.description}`,
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        '                          |',
        '\x1b[0m',
      );
      this.renderEmptyLine();
    });
  }

  private renderOrmOptions(): void {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;0;255;155m',
      ` 〇 ORM`,
      '\x1b[38;2;0;155;255m',
      '                                                                                                             |',
      '\x1b[0m',
    );
    this.renderEmptyLine();
    this.ormOptions.forEach(orm => {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        '|',
        '\x1b[38;2;255;255;0m',
        `   ➤  ${orm.title}`,
        '\x1b[38;2;0;155;255m',
        '|',
        '\x1b[0m',
        `${orm.description}`,
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        '|',
        '\x1b[0m',
      );
      this.renderEmptyLine();
    });
  }

  private renderStructureOptions(): void {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;0;255;155m',
      ` 〇 ${this.messages.structure}`,
      '\x1b[38;2;0;155;255m',
      '                                                                                            |',
      '\x1b[0m',
    );
    this.renderEmptyLine();
    this.structureOptions.forEach(structure => {
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
      this.renderEmptyLine();
    });
  }

  public execute(): void {
    console.log('');
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      ` /================================================${this.messages.comandTitle}=================================================\\`,
      '\x1b[0m',
    );
    this.renderToolOptions();
    this.renderOrmOptions();
    this.renderStructureOptions();
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      ` \\======================================================================================================================/`,
      '\x1b[0m',
    );
    console.log('');
  }
}
