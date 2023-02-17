"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApi = createApi;
var _independent = require("../../../dist/tools/makeProvider/independent");
var _infra = require("./infra");
var _srcLayer = require("./srcLayer1");
var _srcLayer2 = require("./srcLayer2");
var _srcLayer3 = require("./srcLayer3");
var _srcLayer4 = require("./srcLayer4");
var _temporary = require("./temporary");
async function createApi() {
  await (0, _infra.makeInfra)();
  await (0, _srcLayer.makeFirstLayer)();
  await (0, _srcLayer2.makeSecondLayer)();
  await (0, _srcLayer3.makeThirdLayer)();
  await (0, _srcLayer4.makeFourthLayer)();
  await (0, _temporary.makeTemporary)();
  return (0, _independent.makeProvider)('cache');
}