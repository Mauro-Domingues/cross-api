import { Console } from '../console.js';
import { Messages } from '../messages.js';
import { MakeDependentProvider } from './dependent/index.js';
import { MakeProvider } from './independent/index.js';
export class CreateProvider {
    messages;
    console;
    providerName;
    fatherNames;
    makeProvider;
    makeDependentProvider;
    constructor(providerName, fatherNames) {
        this.providerName = providerName;
        this.fatherNames = fatherNames;
        this.messages = new Messages().execute();
        this.console = new Console();
        this.makeProvider = new MakeProvider(this.providerName);
        this.makeDependentProvider = new MakeDependentProvider(this.providerName, this.fatherNames);
    }
    async execute() {
        if (this.providerName && this.fatherNames) {
            await this.makeDependentProvider.execute();
        }
        else if (this.providerName) {
            await this.makeProvider.execute();
        }
        else {
            this.console.one([
                this.messages.providerNotFound,
                'red',
                true,
                false,
                false,
            ]);
        }
    }
}
