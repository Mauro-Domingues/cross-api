import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class CreateSpecService {
  private messages: typeof messages;
  private names:
    | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = messages;
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    return `import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import Fake${this.names.upperModuleName}Repository from '@modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import Create${this.names.upperModuleName}Services from './Create${this.names.upperModuleName}Service';

let fake${this.names.upperModuleName}Repository: Fake${this.names.upperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let create${this.names.upperModuleName}: Create${this.names.upperModuleName}Services;

describe('Create${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.upperModuleName}Repository = new Fake${this.names.upperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    create${this.names.upperModuleName} = new Create${this.names.upperModuleName}Services(
      fake${this.names.upperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await create${this.names.upperModuleName}.execute({
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    expect(${this.names.lowerModuleName}.data).toHaveProperty('id');
  });
});
`;
  }
}
