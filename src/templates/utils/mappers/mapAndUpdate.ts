import messages from '@tools/messages';

export default function createMapAndUpdate(): string {
  return `/**
 * ${messages.mapAndUpdate}
 * @param oldAttributes Entity
 * @param newAttributes Object
 * @returns Promise: Entity
 */
export default async function mapAndUpdateAttribute<Entity, DTO>(
  oldAttributes: Entity,
  newAttributes: DTO,
): Promise<Entity> {
  for (const attribute in newAttributes) {
    if (oldAttributes?.hasOwnProperty(attribute)) {
      Object.assign(oldAttributes, { [attribute]: newAttributes[attribute] });
    }
  }
  return oldAttributes;
}
`;
}
