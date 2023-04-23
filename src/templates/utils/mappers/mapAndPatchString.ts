import { IMessagesDTO, Messages } from '@tools/messages.js';

export class CreateMapAndPatchString {
  private messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { mapAndPatchAttribute } from './mapAndPatchAttribute';

/**
 * ${this.messages.patchAndInsert}
 * @param oldAttributes string
 * @param newAttributes Object
 * @returns string
 */
export function mapAndPatchStringify<Type>(
  oldAttributes: string,
  newAttributes: Type,
): string {
  const patchedAttributes: ReturnType<typeof mapAndPatchAttribute> =
    mapAndPatchAttribute(JSON.parse(oldAttributes), newAttributes);

  return JSON.stringify(patchedAttributes);
}
`;
  }
}
