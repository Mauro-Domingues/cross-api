import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';
import { Provider } from '@tools/provider';

export class ListProvider {
  private readonly messages: IMessageDTO;
  private readonly provider: Provider;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor() {
    this.messages = Messages.getInstance().execute();
    this.provider = new Provider(undefined);
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
  }

  private get trace(): string {
    return String.fromCharCode(0x2013);
  }

  private renderEmptyLine(): void {
    return this.console.execute({
      message: ['|', ' '.repeat(55), '|'],
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: false,
    });
  }

  private renderHeader(): void {
    return this.console.execute([
      {
        message: [' /', '='.repeat(53), '\\'],
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: '|',
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: [
          ' '.repeat(8),
          this.messages.providers.headers.title.padEnd(13, ' '),
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
      {
        message: [
          ' '.repeat(10),
          this.messages.providers.headers.description.padEnd(12, ' '),
        ],
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
        message: ['| ', this.concat.execute(this.trace, ' ').repeat(27), '|'],
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private renderProviderOptions(): void {
    Object.values(this.provider.list).flatMap(provider => {
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: ['  ➤  ', provider.name.padEnd(16, ' ')],
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
          message: [' '.repeat(2), provider.description.padEnd(31, ' ')],
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
      message: [' \\', '='.repeat(53), '/'],
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
