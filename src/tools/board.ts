import { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import { IOptionDTO } from '@interfaces/IOptionDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';

export class Board {
  private readonly structureOptions: Array<IOptionDTO>;
  private readonly toolOptions: Array<IOptionDTO>;
  private readonly boardMessages: IBoardDTO;
  private readonly console: Console;

  public constructor() {
    this.boardMessages = Messages.getInstance().board;
    this.console = Console.getInstance();
    this.toolOptions = [
      {
        title: 'help',
        description: this.boardMessages.description.help,
      },
      {
        title: 'language',
        description: this.boardMessages.description.language,
      },
      {
        title: 'list:provider',
        description: this.boardMessages.description['list:provider'],
      },
    ];
    this.structureOptions = [
      {
        title: 'make:api',
        description: this.boardMessages.description['make:api'],
      },
      {
        title: 'make:module [name]',
        description: this.boardMessages.description['make:module'],
      },
      {
        title: 'make:module [name] [father]',
        description: this.boardMessages.description['make:dependent:module'],
      },
      {
        title: 'make:provider [name]',
        description: this.boardMessages.description['make:provider'],
      },
      {
        title: 'make:provider [name] [father]',
        description: this.boardMessages.description['make:dependent:provider'],
      },
      {
        title: 'revert',
        description: this.boardMessages.description.revert,
      },
    ];
  }

  private get circle(): string {
    return String.fromCharCode(0x3007);
  }

  private renderEmptyLine(): void {
    return this.console.execute({
      message: ['|', ' '.repeat(116), '|'],
      color: 'blue',
      bold: true,
    });
  }

  private renderHeader(): void {
    return this.console.execute({
      message: [
        ' /',
        '='.repeat(46),
        this.boardMessages.headers.title,
        '='.repeat(47),
        '\\',
      ],
      color: 'blue',
      bold: true,
      breakStart: true,
    });
  }

  private renderToolOptions(): void {
    this.renderEmptyLine();
    this.console.execute([
      {
        message: '|',
        color: 'blue',
        bold: true,
      },
      {
        message: [
          ' '.repeat(2),
          this.circle,
          ' ',
          this.boardMessages.headers.tools.padEnd(111, ' '),
        ],
        color: 'green',
        bold: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
      },
    ]);
    this.renderEmptyLine();
    return this.toolOptions.forEach(tool => {
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
        {
          message: [' '.repeat(4), '➤  ', tool.title.padEnd(30, ' ')],
          color: 'yellow',
          bold: true,
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
        {
          message: [' ', tool.description.padEnd(77, ' ')],
          color: 'white',
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
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
      },
      {
        message: [
          ' '.repeat(2),
          this.circle,
          ' ',
          this.boardMessages.headers.structure.padEnd(111, ' '),
        ],
        color: 'green',
        bold: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
      },
    ]);
    this.renderEmptyLine();
    return this.structureOptions.forEach(structure => {
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
        {
          message: [' '.repeat(4), '➤  ', structure.title.padEnd(30, ' ')],
          color: 'yellow',
          bold: true,
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
        {
          message: [' ', structure.description.padEnd(77, ' ')],
          color: 'white',
        },
        {
          message: '|',
          color: 'blue',
          bold: true,
        },
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.execute({
      message: [' \\', '='.repeat(114), '/'],
      color: 'blue',
      bold: true,
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
