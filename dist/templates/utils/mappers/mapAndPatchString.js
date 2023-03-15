"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndPatchString = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateMapAndPatchString {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  execute() {
    return `import mapAndPatchAttribute from './mapAndPatchAttribute';

/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns Promise: string
 */
export default async function mapAndPatchStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): Promise<string> {
  const patchedAttributes = await mapAndPatchAttribute(
    JSON.parse(oldAttributes),
    newAttributes,
  );
  return JSON.stringify(patchedAttributes);
}
`;
  }
}
exports.CreateMapAndPatchString = CreateMapAndPatchString;