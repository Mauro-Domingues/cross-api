import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateRepository {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
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
        return `import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { BaseRepository } from '@shared/modules/repositories/BaseRepository';

export class ${this.names.pluralUpperModuleName}Repository
  extends BaseRepository<${this.names.upperModuleName}>
  implements I${this.names.pluralUpperModuleName}RepositoryDTO
{
  constructor() {
    super(${this.names.upperModuleName});
  }

  // non-generic methods here
}
`;
    }
}
