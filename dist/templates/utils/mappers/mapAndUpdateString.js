"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndUpdateString = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateMapAndUpdateString {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  execute() {
    return `import mapAndUpdateAttribute from './mapAndUpdateAttribute';

/**
 * ${this.messages.mapAndUpdateString}
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
}
exports.CreateMapAndUpdateString = CreateMapAndUpdateString;