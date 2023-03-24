"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMapAndInsert = void 0;
const messages_1 = require("@tools/messages");
class CreateMapAndInsert {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
        return `/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndInsertAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
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
