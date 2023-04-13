import { MakeDependentModule } from './dependent';
import { MakeModule } from './independent';
export class CreateModule {
    names;
    fatherNames;
    makeModule;
    makeDependentModule;
    constructor(names, fatherNames) {
        this.names = names;
        this.fatherNames = fatherNames;
        this.makeModule = new MakeModule(this.names);
        this.makeDependentModule = new MakeDependentModule(this.names, this.fatherNames);
    }
    async execute() {
        if (this.names && this.fatherNames) {
            this.makeDependentModule.execute();
        }
        else if (this.names) {
            this.makeModule.execute();
        }
    }
}
