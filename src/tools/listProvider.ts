export default function listProvider(): void {
  const providers = [
    { Provider: 'CacheProvider', Name: 'cache' },
    { Provider: 'StorageProvider', Name: 'storage' },
  ];

  console.table(providers);
}
