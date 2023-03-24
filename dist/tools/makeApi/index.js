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
exports.CreateApi = void 0;
const index_1 = require("@tools/makeProvider/index");
const infra_1 = require("./infra");
const srcLayer1_1 = require("./srcLayer1");
const srcLayer2_1 = require("./srcLayer2");
const srcLayer3_1 = require("./srcLayer3");
const srcLayer4_1 = require("./srcLayer4");
const temporary_1 = require("./temporary");
class CreateApi {
    constructor() {
        this.createProvider = new index_1.CreateProvider('cache', undefined);
        this.makeTemporary = new temporary_1.MakeTemporary();
        this.makeFourthLayer = new srcLayer4_1.MakeFourthLayer();
        this.makeThirdLayer = new srcLayer3_1.MakeThirdLayer();
        this.makeSecondLayer = new srcLayer2_1.MakeSecondLayer();
        this.makeFirstLayer = new srcLayer1_1.MakeFirstLayer();
        this.makeInfra = new infra_1.MakeInfra();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.makeInfra.execute();
            yield this.makeFirstLayer.execute();
            yield this.makeSecondLayer.execute();
            yield this.makeThirdLayer.execute();
            yield this.makeFourthLayer.execute();
            yield this.makeTemporary.execute();
            return this.createProvider.execute();
        });
    }
}
exports.CreateApi = CreateApi;
