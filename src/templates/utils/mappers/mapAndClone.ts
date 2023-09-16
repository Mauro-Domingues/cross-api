import { IMessagesDTO, Messages } from '@tools/messages';

export class CreateMapAndClone {
  private readonly messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public execute(): string {
    return `import { IObjectDTO } ${'from'} '@dtos/IObjectDTO';

/**
 * ${this.messages.mapAndClone}
 * @param attribute IObjectDTO
 * @returns Promise: Array<IObjectDTO>
 * @param params Array<string>
 */
export function mapAndCloneAttribute(
  attribute: IObjectDTO,
  params: Array<string>,
): Array<IObjectDTO> {
  const objectArray: Array<IObjectDTO> = params.map((param: string) => {
    return {
      [param]: Object.values(attribute)[0],
    };
  });

  return objectArray;
}
`;
  }
}
