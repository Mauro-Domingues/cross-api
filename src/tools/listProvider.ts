export default function listProvider(): void {
  const providers = [
    { Name: 'cache', Provider: 'CacheProvider' },
    { Name: 'storage', Provider: 'StorageProvider' },
    { Name: 'mailTemplate', Provider: 'MailTemplateProvider' },
  ];

  console.table(providers);
}
