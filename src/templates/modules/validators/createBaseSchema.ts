export class CreateBaseSchema {
  public execute(): string {
    return `import type { ObjectSchema, Root, Schema } fr\om 'joi';
import type { Base } fr\om '../entities/Base';

export const baseSchema =
  <T extends Base>(
    target: { new (...args: Array<unknown>): T },
    rest: (ctx: Root) => Partial<Record<keyof T, Schema>>,
  ) =>
  (ctx: Root): ObjectSchema<T> => {
    return ctx
      .object<T>({
        id: ctx.string().guid({ version: 'uuidv4' }).length(36),
        createdAt: ctx.date().iso(),
        updatedAt: ctx.date().iso(),
        deletedAt: ctx.date().iso(),
        ...rest(ctx),
      })
      .id(target.name);
  };
`;
  }
}
