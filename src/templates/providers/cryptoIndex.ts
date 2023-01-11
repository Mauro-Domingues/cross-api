export default function createCryptoIndex(): string {
  return `import { container } from 'tsyringe';

import CryptoProvider from './CryptoProvider/implementations/CryptoProvider';
import ICryptoProvider from './CryptoProvider/models/ICryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
`;
}
