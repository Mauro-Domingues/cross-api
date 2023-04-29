import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateModuleDTO {
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
        return `import { ${this.names.upperModuleName} } from '../entities/${this.names.upperModuleName}';

export interface I${this.names.upperModuleName}DTO extends Partial<${this.names.upperModuleName}> {
  name: string;
  description: string;
}
`;
    }
}
