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
        return `export interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
    }
}
