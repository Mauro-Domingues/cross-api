import { Messages } from '../../../tools/messages.js';

export class CreateMapAndClone {
  messages;
  constructor() {
    this.messages = new Messages().execute();
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
