import { Console } from '@tools/console.js';

interface IOptionDTO {
  Name: string;
  Provider: string;
}

export class ListProvider {
  private providers: IOptionDTO[];
  private console: Console;

  constructor() {
    this.console = new Console();
    this.providers = [
      { Name: 'cache       ', Provider: 'CacheProvider       ' },
      { Name: 'crypto      ', Provider: 'CryptoProvider      ' },
      { Name: 'hash        ', Provider: 'HashProvider        ' },
      { Name: 'lead        ', Provider: 'leadProvider        ' },
      { Name: 'mail        ', Provider: 'MailProvider        ' },
      { Name: 'mailTemplate', Provider: 'MailTemplateProvider' },
      { Name: 'notification', Provider: 'NotificationProvider' },
      { Name: 'upload      ', Provider: 'StorageProvider     ' },
    ];
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
    this.providers.forEach(provider => {
      this.console.many([
        ['|   ', 'blue', true, false, false],
        [` ➤  ${provider.Name}       `, 'yellow', true, false, false],
        ['|   ', 'blue', true, false, false],
        [` ${provider.Provider}     `, 'white', false, false, false],
        ['       |   ', 'blue', true, false, false],
      ]);
      this.renderEmptyLine();
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
