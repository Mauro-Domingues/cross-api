export class CreateSeedExample {
  public execute(): string {
    return `// import { Example } fr\om '@modules/examples/entities/Example';
import { v4 as uuid } fr\om 'uuid';
import { QueryRunner } fr\om 'typeorm';

class Example {}

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
