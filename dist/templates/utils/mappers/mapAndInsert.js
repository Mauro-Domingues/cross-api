"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMapAndInsert = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateMapAndInsert {
  constructor() {
    this.messages = void 0;
    this.messages = new _messages.Messages().execute();
  }
  execute() {
    return `/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndInsertAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
  for (const attribute in newAttributes) {
    if (newAttributes[attribute]) {
      oldAttributes = {
        ...oldAttributes,
        [attribute]: newAttributes[attribute],
      };
    }
  }
  return oldAttributes;
}
`;
  }
}
exports.CreateMapAndInsert = CreateMapAndInsert;