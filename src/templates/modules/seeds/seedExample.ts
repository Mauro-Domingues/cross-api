export class CreateSeedExample {
  public execute(): string {
    return `import type { QueryRunner } fr\om 'typeorm';
import { v4 as uuid } fr\om 'uuid';
// import { Example } fr\om '@modules/examples/entities/Example';

class Example {} // Fake entity

export async function seedExample(trx: QueryRunner): Promise<void> {
  return trx.manager
    .createQueryBuilder()
    .insert()
    .into(Example)
    .values({
      id: uuid(),
      name: 'example',
      description: 'this is an example',
    })
    .execute()
    .then(() => console.log('Example seeded'));
}
`;
  }
}
