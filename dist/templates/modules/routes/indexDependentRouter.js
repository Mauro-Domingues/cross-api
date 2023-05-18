import { Messages } from '../../../tools/messages.js';
import { Console } from '../../../tools/console.js';
export class CreateIndexDependentRoute {
    messages;
    console;
    fatherNames;
    constructor(fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.fatherNames = fatherNames;
    }
    execute() {
        if (!this.fatherNames) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `import { ${this.fatherNames.lowerModuleName}Router } from './${this.fatherNames.lowerModuleName}Router';
routes.use('/', ${this.fatherNames.lowerModuleName}Router);
`;
    }
}
