import type { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';
import { Provider } from '@tools/provider';

export class ListProvider {
  private readonly providerMessages: IProviderDTO;
  private readonly provider: Provider;
  private readonly console: Console;
  private readonly concat: Concat;

  public constructor() {
    this.providerMessages = Messages.getInstance().providers;
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
    this.provider = new Provider();
  }

  private get trace(): string {
    return String.fromCharCode(0x2013);
  }

  private renderEmptyLine(): void {
    return this.console.execute({
      message: ['|', ' '.repeat(55), '|'],
      color: 'blue',
      options: ['bold'],
    });
  }

  private renderHeader(): void {
    return this.console.execute([
      {
        message: [' /', '='.repeat(53), '\\'],
        color: 'blue',
        options: ['bold', 'breakStart', 'breakEnd'],
      },
      {
        message: '|',
        color: 'blue',
        options: ['bold'],
      },
      {
        message: [
          ' '.repeat(8),
          this.providerMessages.headers.title.padEnd(13, ' '),
        ],
        color: 'green',
        options: ['bold'],
      },
      {
        message: '|',
        color: 'blue',
        options: ['bold'],
      },
      {
        message: [
          ' '.repeat(10),
          this.providerMessages.headers.description.padEnd(12, ' '),
        ],
        color: 'green',
        options: ['bold'],
      },
      {
        message: '|'.padStart(12, ' '),
        color: 'blue',
        options: ['bold', 'breakEnd'],
      },
      {
        message: ['| ', this.concat.execute(this.trace, ' ').repeat(27), '|'],
        color: 'blue',
        options: ['bold'],
      },
    ]);
  }

  private renderProviderOptions(): void {
    Object.values(this.provider.list).forEach(provider => {
      this.console.execute([
        {
          message: '|',
          color: 'blue',
          options: ['bold'],
        },
        {
          message: ['  ➤  ', provider.name.padEnd(16, ' ')],
          color: 'yellow',
          options: ['bold'],
        },
        {
          message: '|',
          color: 'blue',
          options: ['bold'],
        },
        {
          message: [' '.repeat(2), provider.description.padEnd(31, ' ')],
          color: 'white',
        },
        {
          message: '|',
          color: 'blue',
          options: ['bold'],
        },
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    return this.console.execute({
      message: [' \\', '='.repeat(53), '/'],
      color: 'blue',
      options: ['bold', 'breakEnd'],
    });
  }

  public execute(): void {
    this.renderHeader();
    this.renderProviderOptions();
    return this.renderFooter();
  }
}
