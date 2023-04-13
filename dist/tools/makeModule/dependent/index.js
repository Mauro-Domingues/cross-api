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
exports.MakeDependentModule = void 0;
const messages_1 = require("../../messages");
const funcionalities_1 = require("./funcionalities");
const infra_1 = require("./infra");
const structure_1 = require("./structure");
const unitTests_1 = require("./unitTests");
class MakeDependentModule {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.makeDependentUnitTests = new unitTests_1.MakeDependentUnitTests(this.names, this.fatherNames);
        this.makeDependentStructure = new structure_1.MakeDependentStructure(this.names, this.fatherNames);
        this.makeDependentInfra = new infra_1.MakeDependentInfra(this.names, this.fatherNames);
        this.makeDependentFunctionalities = new funcionalities_1.MakeDependentFunctionalities(this.names, this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names || !this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            yield this.makeDependentStructure.execute();
            yield this.makeDependentInfra.execute();
            yield this.makeDependentFunctionalities.execute();
            yield this.makeDependentUnitTests.execute();
            return console.log('\x1b[38;2;255;255;0m', `- ${this.names.lowerModuleName}Module ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeDependentModule = MakeDependentModule;
