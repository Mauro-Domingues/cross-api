export class CreateContainer {
  public execute(): string {
    return `import './providers';

import { container } ${'from'} 'tsyringe';
`;
  }
}
