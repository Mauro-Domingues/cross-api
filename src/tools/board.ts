import { Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { IOptionDTO } from '@interfaces/IOptionDTO';
import { IMessageDTO } from '@interfaces/IMessageDTO';

export class Board {
  private readonly structureOptions: Array<IOptionDTO>;
  private readonly toolOptions: Array<IOptionDTO>;
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.toolOptions = [
      { title: 'comands', description: this.messages.comands },
      {
        title: 'language',
        description: this.messages.changeLanguage,
      },
      {
        title: 'list:provider',
        description: this.messages.listProvider,
      },
    ];
    this.structureOptions = [
      {
        title: 'make:api',
        description: this.messages.makeApi,
      },
      {
        title: 'make:module [name]',
        description: this.messages.makeModule,
      },
      {
        title: 'make:module [name] [father]',
        description: this.messages.makeModuleD,
      },
      {
        title: 'make:provider [name]',
        description: this.messages.makeProvider,
      },
      {
        title: 'make:provider [name] [father]',
        description: this.messages.makeProviderD,
      },
      {
        title: 'revert',
        description: this.messages.undo,
      },
    ];
  }

  private renderEmptyLine(): void {
    return this.console.single({
      message: `|${' '.repeat(115)}|`,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.single({
      message: ` /${'='.repeat(46)}${this.messages.comandTitle}${'='.repeat(
        46,
      )}\\`,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  private renderToolOptions(): void {
    this.renderEmptyLine();
    this.console.multi([
      {
        message: '|   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: ` 〇 ${this.messages.tools.padEnd(112, ' ')}`,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
    this.renderEmptyLine();
    return this.toolOptions.forEach(tool => {
      this.console.multi([
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: `   ➤  ${tool.title.padEnd(32, ' ')}`,
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: tool.description.padEnd(78, ' '),
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderStructureOptions(): void {
    this.console.multi([
      {
        message: '|   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: ` 〇 ${this.messages.structure.padEnd(112, ' ')}`,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
    this.renderEmptyLine();
    return this.structureOptions.forEach(structure => {
      this.console.multi([
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: `   ➤  ${structure.title.padEnd(32, ' ')}`,
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: structure.description.padEnd(78, ' '),
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.single({
      message: ` \\${'='.repeat(113)}/`,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
  }

  public execute(): void {
    this.renderHeader();
    this.renderToolOptions();
    this.renderStructureOptions();
    return this.renderFooter();
  }
}
