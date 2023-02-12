"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModule = createModule;
var _dependent = require("./dependent");
var _independent = require("./independent");
async function createModule(names, fatherNames) {
  if (names && fatherNames) {
    (0, _dependent.makeDependentModule)(names, fatherNames);
  } else if (names) {
    (0, _independent.makeModule)(names);
  }
}