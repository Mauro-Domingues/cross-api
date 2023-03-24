"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMapAndPatchString = void 0;
const messages_1 = require("@tools/messages");
class CreateMapAndPatchString {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
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
exports.CreateMapAndPatchString = CreateMapAndPatchString;
