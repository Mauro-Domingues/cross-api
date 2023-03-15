"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNodemonJson = void 0;
class CreateNodemonJson {
  execute() {
    return `{
  "execMap":{
      "js": "node -r sucrase/register"
  }
}`;
  }
}
exports.CreateNodemonJson = CreateNodemonJson;