import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IOptionDTO } from '@interfaces/IOptionDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';

export class Board {
  private readonly structureOptions: Array<IOptionDTO>;
  private readonly toolOptions: Array<IOptionDTO>;
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor() {
    this.messages = new Messages().execute();
    this.console = Console.getInstance();
    this.toolOptions = [
      {
        title: 'comands',
        description: this.messages.board.description.comands,
      },
      {
        title: 'language',
        description: this.messages.board.description.language,
      },
      {
        title: 'list:provider',
        description: this.messages.board.description['list:provider'],
      },
    ];
    this.structureOptions = [
      {
        title: 'make:api',
        description: this.messages.board.description['make:api'],
      },
      {
        title: 'make:module [name]',
        description: this.messages.board.description['make:module'],
      },
      {
        title: 'make:module [name] [father]',
        description: this.messages.board.description['make:dependent:module'],
      },
      {
        title: 'make:provider [name]',
        description: this.messages.board.description['make:provider'],
      },
      {
        title: 'make:provider [name] [father]',
        description: this.messages.board.description['make:dependent:provider'],
      },
      {
        title: 'revert',
        description: this.messages.board.description.revert,
      },
    ];
  }

  private get circle(): string {
    return String.fromCharCode(0x3007);
  }

  private renderEmptyLine(): void {
    return this.console.execute({
      message: ['|', ' '.repeat(115), '|'],
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.execute({
      message: [
        ' /',
        '='.repeat(46),
        this.messages.board.headers.title,
        '='.repeat(46),
        '\\',
      ],
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  private renderToolOptions(): void {
    this.renderEmptyLine();
    this.console.execute([
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: [
          ' '.repeat(2),
          this.circle,
          ' ',
          this.messages.board.headers.tools.padEnd(110, ' '),
        ],
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
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: [' '.repeat(4), '➤ ', tool.title.padEnd(30, ' ')],
          color: 'yellow',
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
        {
          message: [' ', tool.description.padEnd(77, ' ')],
          color: 'white',
          bold: false,
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
      return this.renderEmptyLine();
    });
  }

  private renderStructureOptions(): void {
    this.console.execute([
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: [
          ' '.repeat(2),
          this.circle,
          ' ',
          this.messages.board.headers.structure.padEnd(110, ' '),
        ],
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
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: [' '.repeat(4), '➤ ', structure.title.padEnd(30, ' ')],
          color: 'yellow',
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
        {
          message: [' ', structure.description.padEnd(77, ' ')],
          color: 'white',
          bold: false,
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
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.execute({
      message: [' \\', '='.repeat(113), '/'],
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
