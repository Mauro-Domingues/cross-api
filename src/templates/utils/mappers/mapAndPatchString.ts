import messages from '@tools/messages';

export class CreateMapAndPatchString {
  private messages: typeof messages;

  constructor() {
    this.messages = messages;
  }

  public execute(): string {
    return `import mapAndPatchAttribute from './mapAndPatchAttribute';

/**
 * ${this.messages.patchAndInsert}
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
}
