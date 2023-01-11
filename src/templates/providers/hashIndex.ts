export default function createHashIndex(): string {
  return `import { container } from 'tsyringe';

import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';
import IHashProvider from './HashProvider/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
`;
}
