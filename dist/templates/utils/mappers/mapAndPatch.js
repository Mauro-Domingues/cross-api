"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndPatch;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
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
  const patchedAttributes: any = oldAttributes;
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      if (oldAttributes?.hasOwnProperty(attribute)) {
        patchedAttributes[attribute] = newAttributes[attribute];
      }
    }
  }
  return patchedAttributes;
}
`;
}