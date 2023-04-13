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
exports.CreateModule = void 0;
const dependent_1 = require("./dependent");
const independent_1 = require("./independent");
class CreateModule {
    constructor(names, fatherNames) {
        this.names = names;
        this.fatherNames = fatherNames;
        this.makeModule = new independent_1.MakeModule(this.names);
        this.makeDependentModule = new dependent_1.MakeDependentModule(this.names, this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.names && this.fatherNames) {
                this.makeDependentModule.execute();
            }
            else if (this.names) {
                this.makeModule.execute();
            }
        });
    }
}
exports.CreateModule = CreateModule;
