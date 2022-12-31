export default function listProvider(): void {
  const providers = [
    { Name: 'cache', Provider: 'CacheProvider' },
    { Name: 'storage', Provider: 'StorageProvider' },
    { Name: 'mailTemplate', Provider: 'MailTemplateProvider' },
    { Name: 'mail', Provider: 'MailProvider' },
  ];

  console.table(providers);
}
