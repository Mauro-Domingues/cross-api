export class CreateBaseSchema {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { Base } fr\om '../entities/Base';

export const baseSchema: Record<keyof Base, Joi.Schema> = {
  id: Joi.string().uuid({ separator: '-', version: 'uuidv4' }).length(36),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
  deletedAt: Joi.date().iso(),
};
`;
  }
}
