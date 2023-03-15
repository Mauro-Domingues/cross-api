import messages from './messages';

interface IOptionDTO {
  title: string;
  description: string;
}

export class Board {
  private messages: typeof messages;
  private toolOptions: IOptionDTO[];
  private ormOptions: IOptionDTO[];
  private structureOptions: IOptionDTO[];

  constructor() {
    this.messages = messages;
    this.toolOptions = [
      { title: 'comands             ', description: messages.comands },
      { title: 'language            ', description: messages.changeLanguage },
      { title: 'list:provider       ', description: messages.listProvider },
    ];
    this.ormOptions = [
      {
        title: 'migration:generate           ',
        description: messages.migrationGenerate,
      },
      {
        title: 'migration:run                ',
        description: messages.migrationRun,
      },
    ];
    this.structureOptions = [
      { title: 'make:api                     ', description: messages.makeApi },
      {
        title: 'make:module [name]           ',
        description: messages.makeModule,
      },
      {
        title: 'make:module [name] [father]  ',
        description: messages.makeModuleD,
      },
      {
        title: 'make:provider [name]         ',
        description: messages.makeProvider,
      },
      {
        title: 'make:provider [name] [father]',
        description: messages.makeProviderD,
      },
      {
        title: 'migration:generate           ',
        description: messages.migrationGenerate,
      },
      {
        title: 'revert                       ',
        description: messages.undo,
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
