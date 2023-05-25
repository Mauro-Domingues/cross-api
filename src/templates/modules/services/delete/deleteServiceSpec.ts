import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';

export class DeleteSpecService {
  private messages: IMessagesDTO;
  private console: Console;
  private names:
    | Omit<IModuleNamesDTO, 'dbModuleName' | 'routeModuleName'>
    | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.names = names;
  }

  public execute(): string {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    return `import { FakeCacheProvider } from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import { AppError } from '@shared/errors/AppError';

import { Fake${this.names.pluralUpperModuleName}Repository } from '@modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository';
import { QueryRunner } from 'typeorm';
import { Delete${this.names.upperModuleName}Service } from './Delete${this.names.upperModuleName}Service';

let fake${this.names.pluralUpperModuleName}Repository: Fake${this.names.pluralUpperModuleName}Repository;
let fakeCacheProvider: FakeCacheProvider;
let delete${this.names.upperModuleName}: Delete${this.names.upperModuleName}Service;

describe('Delete${this.names.upperModuleName}Service', () => {
  beforeEach(() => {
    fake${this.names.pluralUpperModuleName}Repository = new Fake${this.names.pluralUpperModuleName}Repository();
    fakeCacheProvider = new FakeCacheProvider();

    delete${this.names.upperModuleName} = new Delete${this.names.upperModuleName}Service(
      fake${this.names.pluralUpperModuleName}Repository,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a new ${this.names.lowerModuleName}', async () => {
    const ${this.names.lowerModuleName} = await fake${this.names.pluralUpperModuleName}Repository.create({} as QueryRunner, {
      name: '${this.names.lowerModuleName}',
      description: 'This is a ${this.names.lowerModuleName}',
    });

    await delete${this.names.upperModuleName}.execute({ id: ${this.names.lowerModuleName}.id });

    const deleted${this.names.upperModuleName} = await fake${this.names.pluralUpperModuleName}Repository.findBy({} as QueryRunner, { id: ${this.names.lowerModuleName}.id });

    expect(deleted${this.names.upperModuleName}).toBe(null);
  });

  it('should return App error', async () => {
    await expect(delete${this.names.upperModuleName}.execute({})).rejects.toBeInstanceOf(AppError);
  });
});
`;
  }
}
