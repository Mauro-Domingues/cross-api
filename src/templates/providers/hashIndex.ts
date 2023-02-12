export function createHashIndex(): string {
  return `import { container } from 'tsyringe';

import BCryptHashProvider from './implementations/BCryptHashProvider';
import IHashProvider from './models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
`;
}
