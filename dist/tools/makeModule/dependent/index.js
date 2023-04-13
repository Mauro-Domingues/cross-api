import { Messages } from '../../messages';
import { MakeDependentFunctionalities } from './funcionalities';
import { MakeDependentInfra } from './infra';
import { MakeDependentStructure } from './structure';
import { MakeDependentUnitTests } from './unitTests';
export class MakeDependentModule {
    messages;
    names;
    fatherNames;
    makeDependentUnitTests;
    makeDependentStructure;
    makeDependentInfra;
    makeDependentFunctionalities;
    constructor(names, fatherNames) {
        this.messages = new Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.makeDependentUnitTests = new MakeDependentUnitTests(this.names, this.fatherNames);
        this.makeDependentStructure = new MakeDependentStructure(this.names, this.fatherNames);
        this.makeDependentInfra = new MakeDependentInfra(this.names, this.fatherNames);
        this.makeDependentFunctionalities = new MakeDependentFunctionalities(this.names, this.fatherNames);
    }
    async execute() {
        if (!this.names || !this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
            throw new Error();
        }
        await this.makeDependentStructure.execute();
        await this.makeDependentInfra.execute();
        await this.makeDependentFunctionalities.execute();
        await this.makeDependentUnitTests.execute();
        return console.log('\x1b[38;2;255;255;0m', `- ${this.names.lowerModuleName}Module ${this.messages.created}`, '\x1b[0m');
    }
}
