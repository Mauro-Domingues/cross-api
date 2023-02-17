"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTemporary = makeTemporary;
var _fs = require("fs");
var _authConfig = require("../../../dist/templates/providers/config/authConfig");
var _corsConfig = require("../../../dist/templates/providers/config/corsConfig");
async function makeTemporary() {
  if (!(0, _fs.existsSync)('src/config/auth.ts')) {
    (0, _fs.appendFile)('src/config/auth.ts', (0, _authConfig.createAuthConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/auth.ts', (0, _authConfig.createAuthConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/config/cors.ts')) {
    (0, _fs.appendFile)('src/config/cors.ts', (0, _corsConfig.createCorsConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/cors.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/cors.ts', (0, _corsConfig.createCorsConfig)(), error => {
      if (error) throw error;
    });
  }
}