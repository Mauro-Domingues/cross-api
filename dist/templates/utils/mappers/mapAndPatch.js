"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndPatch = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateMapAndPatch {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  execute() {
    return `/**
 * ${this.messages.mapAndPatch}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndPatchAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  for (const attribute in newAttributes) {
    if (newAttributes[attribute] && oldAttributes?.hasOwnProperty(attribute)) {
      Object.assign(oldAttributes, { [attribute]: newAttributes[attribute] });
    }
  }
  return oldAttributes;
}
`;
  }
}
exports.CreateMapAndPatch = CreateMapAndPatch;