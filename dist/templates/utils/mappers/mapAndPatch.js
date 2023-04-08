"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndPatch = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateMapAndPatch {
  constructor() {
    this.messages = void 0;
    this.messages = new _messages.Messages().execute();
  }
  execute() {
    return `/**
 * ${this.messages.mapAndPatch}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndPatchAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
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