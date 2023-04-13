import { Messages } from '../../../tools/messages.js';

export class CreateMapAndPatch {
  messages;
  constructor() {
    this.messages = new Messages().execute();
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
