import { Console } from '@tools/console';
import { Provider } from '@tools/provider';

export class ListProvider {
  private readonly provider: Provider;
  private readonly console: Console;

  constructor() {
    this.provider = new Provider(undefined);
    this.console = new Console();
  }

  private renderEmptyLine(): void {
    this.console.one([
      '|                                                       |   ',
      'blue',
      true,
      false,
      false,
    ]);
  }

  private renderHeader(): void {
    this.console.many([
      [
        ` /=====================================================\\   `,
        'blue',
        true,
        true,
        true,
      ],
      ['|   ', 'blue', true, false, false],
      [`       NAME   `, 'green', true, false, false],
      ['         |   ', 'blue', true, false, false],
      [`        DESCRIPTION   `, 'green', true, false, false],
      ['           |   ', 'blue', true, false, true],
      [
        '| – – – – – – – – – – – – – – – – – – – – – – – – – – – |   ',
        'blue',
        true,
        false,
        false,
      ],
    ]);
  }

  private renderProviderOptions(): void {
    Object.values(this.provider.list).flatMap(provider => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [` ➤  ${provider.name}       `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [` ${provider.description}     `, 'white', false, false, false],
        ['       |   ', 'blue', true, false, false],
      ]);
      return this.renderEmptyLine();
    });
  }

  private renderFooter(): void {
    this.console.one([
      ` \\=====================================================/   `,
      'blue',
      true,
      false,
      true,
    ]);
  }

  public execute(): void {
    this.renderHeader();
    this.renderProviderOptions();
    this.renderFooter();
  }
}
