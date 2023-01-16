"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndUpdate;
var _messages = _interopRequireDefault(require("../../../tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndUpdate() {
  return `/**
 * ${_messages.default.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedAttributes: any = oldAttributes;
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    // eslint-disable-next-line no-prototype-builtins
    if (oldAttributes?.hasOwnProperty(attribute)) {
      updatedAttributes[attribute] = newAttributes[attribute];
    }
  }
  return updatedAttributes;
}
`;
}