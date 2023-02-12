import messages from '@tools/messages';

export function createMapAndInsert(): string {
  return `/**
 * ${messages.patchAndInsert}
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
