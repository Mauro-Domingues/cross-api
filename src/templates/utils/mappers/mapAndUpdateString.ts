import messages from '../../../tools/messages';

export default function createMapAndUpdateString(): string {
  return `import mapAndUpdateAttribute from './mapAndUpdateAttribute';

/**
 * ${messages.mapAndUpdateString}
 */
export default async function mapAndUpdateStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): Promise<string> {
  const updatedAttributes = await mapAndUpdateAttribute(
    JSON.parse(oldAttributes),
    newAttributes,
  );
  return JSON.stringify(updatedAttributes);
}
`;
}
