"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndPatchString = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateMapAndPatchString {
  constructor() {
    this.messages = void 0;
    this.messages = new _messages.Messages().execute();
  }
  execute() {
    return `import { mapAndPatchAttribute } from './mapAndPatchAttribute';

/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns string
 */
export function mapAndPatchStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): string {
  const patchedAttributes: ReturnType<typeof mapAndPatchAttribute> =
    mapAndPatchAttribute(JSON.parse(oldAttributes), newAttributes);

  return JSON.stringify(patchedAttributes);
}
`;
  }
}
exports.CreateMapAndPatchString = CreateMapAndPatchString;