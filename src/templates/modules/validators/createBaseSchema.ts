export class CreateBaseSchema {
  public execute(): string {
    return `import type { ObjectSchema, Root, Schema } fr\om 'joi';
import type { Base } fr\om '../entities/Base';

export const baseSchema =
  <T extends Base>(
    target: { new (...args: Array<unknown>): T },
    rest: (
      ctx: Root,
      baseFields: Record<keyof Base, Schema>,
    ) => Partial<Record<keyof T, Schema>>,
  ) =>
  (ctx: Root): ObjectSchema<T> => {
    const baseFields: Record<keyof Base, Schema> = {
      id: ctx.string().guid({ version: 'uuidv4' }).length(36),
      createdAt: ctx.date().iso(),
      updatedAt: ctx.date().iso(),
      deletedAt: ctx.date().iso(),
    };

    return ctx
      .object<T>({
        ...baseFields,
        ...rest(ctx, baseFields),
      })
      .id(target.name);
  };
`;
  }
}
