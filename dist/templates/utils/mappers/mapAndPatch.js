"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndPatch;
var _messages = _interopRequireDefault(require("../../../tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndPatch() {
  return `/**
 * ${_messages.default.mapAndPatch}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndPatchAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patchedAttributes: any = oldAttributes;
  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      // eslint-disable-next-line no-prototype-builtins
      if (oldAttributes?.hasOwnProperty(attribute)) {
        // eslint-disable-next-line no-param-reassign
        patchedAttributes[attribute] = newAttributes[attribute];
      }
    }
  }
  return patchedAttributes;
}
`;
}