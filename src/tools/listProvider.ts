import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';
import { Provider } from '@tools/provider';

export class ListProvider {
  private readonly provider: Provider;
  private readonly console: Console;
  protected messages: IMessageDTO;

  public constructor() {
    this.messages = new Messages().execute();
    this.provider = new Provider(undefined);
    this.console = new Console();
  }

  private renderEmptyLine(): void {
    return this.console.single({
      message: `|${' '.repeat(55)}|`,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.multi([
      {
        message: ` /${'='.repeat(53)}\\`,
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
        message: `       ${this.messages.providers.headers.title}`.padEnd(
          23,
          ' ',
        ),
        color: 'green',
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
        message:
          `        ${this.messages.providers.headers.description}`.padEnd(
            22,
            ' ',
          ),
        color: 'green',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: '|'.padStart(12, ' '),
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: true,
      },
      {
        message: `| ${'– '.repeat(27)}|`,
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private renderProviderOptions(): void {
    Object.values(this.provider.list).flatMap(provider => {
      this.console.multi([
        {
          message: '|   ',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ` ➤  ${provider.name.padEnd(19, ' ')}`,
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
          message: ` ${provider.description.padEnd(32, ' ')}`,
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
    return this.console.single({
      message: ` \\${'='.repeat(53)}/   `,
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
