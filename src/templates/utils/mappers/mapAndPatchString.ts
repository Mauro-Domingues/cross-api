import messages from '@tools/messages';

export function createMapAndPatchString(): string {
  return `import mapAndPatchAttribute from './mapAndPatchAttribute';

/**
 * ${messages.patchAndInsert}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns Promise: string
 */
export default async function mapAndPatchStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): Promise<string> {
  const patchedAttributes = await mapAndPatchAttribute(
    JSON.parse(oldAttributes),
    newAttributes,
  );
  return JSON.stringify(patchedAttributes);
}
`;
}
