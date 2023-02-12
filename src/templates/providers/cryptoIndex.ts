export function createCryptoIndex(): string {
  return `import { container } from 'tsyringe';

import CryptoProvider from './implementations/CryptoProvider';
import ICryptoProvider from './models/ICryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
`;
}
