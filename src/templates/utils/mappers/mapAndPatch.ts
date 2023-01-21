import messages from '@tools/messages';

export default function createMapAndPatch(): string {
  return `/**
 * ${messages.mapAndPatch}
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
