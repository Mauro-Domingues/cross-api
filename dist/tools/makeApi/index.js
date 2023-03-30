"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateApi = void 0;
var _makeProvider = require("../../../dist/tools/makeProvider");
var _infra = require("./infra");
var _srcLayer = require("./srcLayer1");
var _srcLayer2 = require("./srcLayer2");
var _srcLayer3 = require("./srcLayer3");
var _srcLayer4 = require("./srcLayer4");
var _temporary = require("./temporary");
class CreateApi {
  constructor() {
    this.createProvider = void 0;
    this.makeTemporary = void 0;
    this.makeFourthLayer = void 0;
    this.makeThirdLayer = void 0;
    this.makeSecondLayer = void 0;
    this.makeFirstLayer = void 0;
    this.makeInfra = void 0;
    this.createProvider = new _makeProvider.CreateProvider('cache', undefined);
    this.makeTemporary = new _temporary.MakeTemporary();
    this.makeFourthLayer = new _srcLayer4.MakeFourthLayer();
    this.makeThirdLayer = new _srcLayer3.MakeThirdLayer();
    this.makeSecondLayer = new _srcLayer2.MakeSecondLayer();
    this.makeFirstLayer = new _srcLayer.MakeFirstLayer();
    this.makeInfra = new _infra.MakeInfra();
  }
  async execute() {
    await this.makeInfra.execute();
    await this.makeFirstLayer.execute();
    await this.makeSecondLayer.execute();
    await this.makeThirdLayer.execute();
    await this.makeFourthLayer.execute();
    await this.makeTemporary.execute();
    return this.createProvider.execute();
  }
}
exports.CreateApi = CreateApi;