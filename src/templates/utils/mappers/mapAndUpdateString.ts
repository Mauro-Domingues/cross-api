import messages from '@tools/messages';

export class CreateMapAndUpdateString {
  private messages: typeof messages;

  constructor() {
    this.messages = messages;
  }

  public execute(): string {
    return `import mapAndUpdateAttribute from './mapAndUpdateAttribute';

/**
 * ${this.messages.mapAndUpdateString}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns Promise: string
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
}
