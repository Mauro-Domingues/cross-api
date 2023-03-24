"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shell = void 0;
var _child_process = require("child_process");
class Shell {
  async execute(comand) {
    return (0, _child_process.execSync)(comand, {
      encoding: 'utf-8'
    });
  }
}
exports.Shell = Shell;