export class CreateSeedIndex {
  public execute(): string {
    return `import { QueryRunner } ${'from'} 'typeorm';
import { Connection } ${'from'} '../index';
import { seedExample } ${'from'} '../seeds/example';

const available = {
  example: seedExample,
} as const;

const keys = Object.keys(available) as Array<keyof typeof available>;

const [, , database, ...seeds] = process.argv as [
  executable: string,
  scriptPath: string,
  database: string,
  ...rest: Array<keyof typeof available>,
];

seeds.sort((a, b) => {
  const prevIndex = keys.indexOf(a);
  const currIndex = keys.indexOf(b);
  if (prevIndex === -1 || currIndex === -1) {
    throw new Error(\`Invalid seed: \${prevIndex === -1 ? a : b}\`);
  }
  return prevIndex - currIndex;
});

async function runSeeds({
  keys,
  trx,
}: {
  keys: Array<keyof typeof available>;
  trx: QueryRunner;
}): Promise<void> {
  return keys.reduce<Promise<void>>(
    async (prevPromise, curr): Promise<void> => {
      await prevPromise;

      return available[curr](trx);
    },
    Promise.resolve(),
  );
}

(async function main(): Promise<void> {
  const connection = new Connection(database);
  await connection.connect();

  const { mysql } = connection;

  await mysql.runMigrations();

  const trx = mysql.createQueryRunner();

  await trx.startTransaction();
  try {
    await runSeeds({
      keys: seeds.length ? seeds : keys,
      trx,
    });

    if (trx.isTransactionActive) await trx.commitTransaction();
  } catch (error: unknown) {
    if (trx.isTransactionActive) await trx.rollbackTransaction();

    throw error;
  } finally {
    if (!trx.isReleased) await trx.release();
    if (mysql.isInitialized) await mysql.destroy();
  }
})();
`;
  }
}
