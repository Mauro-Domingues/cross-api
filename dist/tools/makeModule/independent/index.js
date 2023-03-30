"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeModule = void 0;
const messages_1 = require("../../messages");
const infra_1 = require("./infra");
const functionalities_1 = require("./functionalities");
const structure_1 = require("./structure");
const unitTests_1 = require("./unitTests");
class MakeModule {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.makeUnitTests = new unitTests_1.MakeUnitTests(this.names);
        this.makeStructure = new structure_1.MakeStructure(this.names);
        this.makeInfra = new infra_1.MakeInfra(this.names);
        this.makeFunctionalities = new functionalities_1.MakeFunctionalities(this.names);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            yield this.makeStructure.execute();
            yield this.makeInfra.execute();
            yield this.makeFunctionalities.execute();
            yield this.makeUnitTests.execute();
            return console.log('\x1b[38;2;255;255;0m', `- ${this.names.lowerModuleName}Module ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeModule = MakeModule;
