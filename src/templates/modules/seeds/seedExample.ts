export class CreateSeedExample {
  public execute(): string {
    return `// import { Example } fr\om '@modules/examples/entities/Example';
import { v4 as uuid } fr\om 'uuid';
import type { QueryRunner } fr\om 'typeorm';

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
