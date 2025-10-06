export class CreateSeedExample {
  public execute(): string {
    return `import { Example } ${'from'} '@modules/examples/entities/Example';
import { v4 as uuid } ${'from'} 'uuid';
import { QueryRunner } ${'from'} 'typeorm';

export async function seedExample(trx: QueryRunner): Promise<void> {
  return trx.manager
    .save(
      trx.manager.create(Example, {
        id: uuid(),
        name: 'example',
        description: 'this is an example',
      }),
    )
    .then(() => console.log('Example seeded'));
}
`;
  }
}
