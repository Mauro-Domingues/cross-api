"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMapAndUpdate = void 0;
const messages_1 = require("../../../tools/messages");
class CreateMapAndUpdate {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
        return `/**
 * ${this.messages.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Entity
 */
export function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Entity {
  for (const attribute in newAttributes) {
    if (oldAttributes?.hasOwnProperty(attribute)) {
      Object.assign(oldAttributes, { [attribute]: newAttributes[attribute] });
    }
  }
  return oldAttributes;
}
`;
    }
}
exports.CreateMapAndUpdate = CreateMapAndUpdate;
