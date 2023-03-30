"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMapAndPatch = void 0;
const messages_1 = require("../../../tools/messages");
class CreateMapAndPatch {
    constructor() {
        this.messages = new messages_1.Messages().execute();
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
