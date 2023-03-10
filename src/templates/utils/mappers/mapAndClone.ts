import messages from '@tools/messages';

export class CreateMapAndClone {
  private messages: typeof messages;

  constructor() {
    this.messages = messages;
  }

  public execute(): string {
    return `import IObjectDTO from "@dtos/IObjectDTO";

/**
 * ${this.messages.mapAndClone}
 * @param attribute IObjectDTO
 * @returns Promise: IObjectDTO[]
 * @param params string[]
 */
export default async function mapAndCloneAttribute(
  attribute: IObjectDTO,
  params: string[],
): Promise<IObjectDTO[]> {
  const objectArray: IObjectDTO[] = [];
  params.forEach((param: string) => {
    objectArray.push({
      [param]: Object.values(attribute)[0],
    });
  });

  return objectArray;
}
`;
  }
}
