export class CreateBaseSchema {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { Base } fr\om '../entities/Base';

export const baseSchema =
  <T>(rest: (ctx: typeof Joi) => Partial<Record<keyof T, Joi.Schema>>) =>
  (ctx: typeof Joi): Record<keyof T, Joi.Schema> => {
    const schema: Record<keyof Base, Joi.Schema> = {
      id: ctx.string().guid({ version: 'uuidv4' }).length(36),
      createdAt: ctx.date().iso(),
      updatedAt: ctx.date().iso(),
      deletedAt: ctx.date().iso(),
    };

    return { ...schema, ...rest(ctx) } as Record<keyof T, Joi.Schema>;
  };
`;
  }
}
