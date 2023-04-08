import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateMapAndClone {
  private messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
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
