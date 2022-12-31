export default function listProvider(): void {
  const providers = [
    { Name: 'cache       ', Provider: 'CacheProvider       ' },
    { Name: 'storage     ', Provider: 'StorageProvider     ' },
    { Name: 'mailTemplate', Provider: 'MailTemplateProvider' },
    { Name: 'mail        ', Provider: 'MailProvider        ' },
    { Name: 'notification', Provider: 'notificationProvider' },
  ];

  const trace = '\\';
  console.log('');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` /==========================================================${trace}`,
    '\x1b[0m',
  );
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    '|                                                            |',
    '\x1b[0m',
  );
  providers.forEach(provider => {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[38;2;255;255;0m',
      `   ➤  ${provider.Name}     `,
      '\x1b[38;2;0;155;255m',
      '|',
      '\x1b[0m',
      `${provider.Provider}`,
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '       |',
      '\x1b[0m',
    );
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      '|                                                            |',
      '\x1b[0m',
    );
  });
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    ` ${trace}==========================================================/`,
    '\x1b[0m',
  );
  console.log('');
}
