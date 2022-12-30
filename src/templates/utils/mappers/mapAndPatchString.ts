import messages from '../../../tools/messages';

export default function createMapAndPatchString(): string {
  return `import mapAndPatchAttribute from './mapAndPatchAttribute';

/**
* ${messages.patchAndInsert}
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
