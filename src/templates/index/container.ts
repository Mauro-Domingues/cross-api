export class CreateContainerIndex {
  public execute(): string {
    return `import './providers';
import { container } ${'from'} 'tsyringe';
`;
  }
}
