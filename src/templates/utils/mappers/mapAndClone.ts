import messages from '../../../tools/messages';

export default function createMapAndClone(): string {
  return `import IObjectDTO from '@dtos/IObjectDTO';

/**
 * ${messages.mapAndClone}
 * @param params string[]
 * @param attribute IObjectDTO
 * @returns Promise: IObjectDTO[]
 */
export default async function mapAndCloneAttribute(
  params: string[],
  attribute: IObjectDTO,
): Promise<IObjectDTO[]> {
  const objectArray: IObjectDTO[] = [];
  params.forEach(param => {
    objectArray.push({
      [param]: attribute.id,
    });
  });

  return objectArray;
}
`;
}
