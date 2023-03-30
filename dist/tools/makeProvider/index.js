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
exports.CreateProvider = void 0;
const messages_1 = require("../messages");
const dependent_1 = require("./dependent");
const independent_1 = require("./independent");
class CreateProvider {
    constructor(providerName, fatherNames) {
        this.providerName = providerName;
        this.fatherNames = fatherNames;
        this.messages = new messages_1.Messages().execute();
        this.makeProvider = new independent_1.MakeProvider(this.providerName);
        this.makeDependentProvider = new dependent_1.MakeDependentProvider(this.providerName, this.fatherNames);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.providerName && this.fatherNames) {
                yield this.makeDependentProvider.execute();
            }
            else if (this.providerName) {
                yield this.makeProvider.execute();
            }
            else {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
            }
        });
    }
}
exports.CreateProvider = CreateProvider;
