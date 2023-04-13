"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMapAndClone = void 0;
const messages_1 = require("../../../tools/messages");
class CreateMapAndClone {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
        return `import { IObjectDTO } from "@dtos/IObjectDTO";

/**
 * ${this.messages.mapAndClone}
 * @param attribute IObjectDTO
 * @returns Promise: IObjectDTO[]
 * @param params string[]
 */
export function mapAndCloneAttribute(
  attribute: IObjectDTO,
  params: string[],
): IObjectDTO[] {
  const objectArray: IObjectDTO[] = params.map((param: string) => {
    return {
      [param]: Object.values(attribute)[0],
    };
  });

  return objectArray;
}
`;
    }
}
exports.CreateMapAndClone = CreateMapAndClone;
