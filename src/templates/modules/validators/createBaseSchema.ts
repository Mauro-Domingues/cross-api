export class CreateBaseSchema {
  public execute(): string {
    return `import type { Root, Schema, ObjectSchema } fr\om 'joi';
import { Base } fr\om '../entities/Base';

export const baseSchema =
  <T extends Base>(
    target: { new (...args: Array<unknown>): T },
    rest: (ctx: Root) => Partial<Record<keyof T, Schema>>,
  ) =>
  (ctx: Root): ObjectSchema<T> => {
    const schema: Record<keyof Base, Schema> = {
      id: ctx.string().guid({ version: 'uuidv4' }).length(36),
      createdAt: ctx.date().iso(),
      updatedAt: ctx.date().iso(),
      deletedAt: ctx.date().iso(),
    };

    return ctx.object<T>({ ...schema, ...rest(ctx) }).id(target.name);
  };
`;
  }
}
