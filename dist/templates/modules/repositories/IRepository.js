import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateIRepository {
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
import { IBaseRepositoryDTO } from '@shared/modules/repositories/IBaseRepository';

export interface I${this.names.pluralUpperModuleName}RepositoryDTO extends IBaseRepositoryDTO<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
    }
}
