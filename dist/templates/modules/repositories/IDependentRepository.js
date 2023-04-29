import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateIDependentRepository {
    messages;
    console;
    names;
    fatherNames;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.names || !this.fatherNames) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `import { ${this.names.upperModuleName} } from '@modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { IBaseRepositoryDTO } from '@shared/modules/repositories/IBaseRepository';

export interface I${this.names.pluralUpperModuleName}RepositoryDTO extends IBaseRepositoryDTO<${this.names.upperModuleName}> {
  // non-generic methods here
}
`;
    }
}
