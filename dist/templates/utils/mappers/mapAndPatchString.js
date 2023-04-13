import { Messages } from '../../../tools/messages';
export class CreateMapAndPatchString {
    messages;
    constructor() {
        this.messages = new Messages().execute();
    }
    execute() {
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
