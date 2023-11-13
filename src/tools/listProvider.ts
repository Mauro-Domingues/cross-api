import { Console } from '@tools/console';
import { Provider } from '@tools/provider';

export class ListProvider {
  private readonly provider: Provider;
  private readonly console: Console;

  public constructor() {
    this.provider = new Provider(undefined);
    this.console = new Console();
  }

  private renderEmptyLine(): void {
    return this.console.one({
      message: '|                                                       |   ',
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.many([
      {
        message: ` /=====================================================\\   `,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: '|   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: `       NAME   `,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '         |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: `        DESCRIPTION   `,
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '           |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: true,
      },
      {
        message: '| – – – – – – – – – – – – – – – – – – – – – – – – – – – |   ',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private renderProviderOptions(): void {
    Object.values(this.provider.list).flatMap(provider => {
      this.console.many([
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ` ➤  ${provider.name}       `,
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
          message: ` ${provider.description}     `,
          color: 'white',
          bold: false,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: '       |   ',
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
    return this.console.one({
      message: ` \\=====================================================/   `,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
  }

  public execute(): void {
    this.renderHeader();
    this.renderProviderOptions();
    return this.renderFooter();
  }
}
