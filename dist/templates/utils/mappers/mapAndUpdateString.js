"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMapAndUpdateString = createMapAndUpdateString;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndUpdateString() {
  return `import mapAndUpdateAttribute from './mapAndUpdateAttribute';

/**
 * ${_messages.default.mapAndUpdateString}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns Promise: string
 */
export default async function mapAndUpdateStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): Promise<string> {
  const updatedAttributes = await mapAndUpdateAttribute(
    JSON.parse(oldAttributes),
    newAttributes,
  );
  return JSON.stringify(updatedAttributes);
}
`;
}