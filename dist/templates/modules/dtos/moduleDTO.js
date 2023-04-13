import { Messages } from '../../../tools/messages';
export class CreateModuleDTO {
    messages;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        return `export interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
    }
}
