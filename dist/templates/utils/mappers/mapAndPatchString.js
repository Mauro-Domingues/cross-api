"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMapAndPatchString = createMapAndPatchString;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndPatchString() {
  return `import mapAndPatchAttribute from './mapAndPatchAttribute';

/**
 * ${_messages.default.patchAndInsert}
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