export class CreateSeedIndex {
  public execute(): string {
    return `import { DataSource, QueryRunner } ${'from'} 'typeorm';
import { Connection } ${'from'} '../index';
import { seedExample } ${'from'} '../seeds/example';

const available = {
  seedExample,
} as const;
const keys = Object.keys(available) as Array<keyof typeof available>;

const seeds = process.argv
  .slice(2)
  .map(arg => {
    return \`seed\${arg.charAt(0).toUpperCase()}\${arg.slice(
      1,
    )}\` as keyof typeof available;
  })
  .sort((a, b) => {
    const prevIndex = keys.indexOf(a);
    const currIndex = keys.indexOf(b);
    if (prevIndex === -1 || currIndex === -1) {
      throw new Error(\`Invalid seed: \${prevIndex === -1 ? a : b}\`);
    }
    return prevIndex - currIndex;
  });

async function runSeeds({
  dataSource,
  keys,
  trx,
}: {
  keys: Array<keyof typeof available>;
  dataSource: DataSource;
  trx: QueryRunner;
}): Promise<void> {
  return keys.reduce<Promise<void>>(
    async (prevPromise, curr): Promise<void> => {
      await prevPromise;

      return available[curr](dataSource, trx);
    },
    Promise.resolve(),
  );
}

(async function seed(): Promise<void> {
  const connection = new Connection(process.argv[2]);
  await connection.connect();

  const { mysql } = connection;

  await mysql.runMigrations();

  const trx = mysql.createQueryRunner();

  await trx.startTransaction();
  try {
    await runSeeds({
      keys: seeds.length ? seeds : keys,
      dataSource: mysql,
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
