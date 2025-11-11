export class CreateBaseValidator {
  public execute(): string {
    return `import type { CelebrateOptions, SchemaOptions } fr\om 'celebrate';
import { celebrate, Joi } fr\om 'celebrate';
import type { RequestHandler } fr\om 'express';
import type { Root, ValidationOptions } fr\om 'joi';

export const baseValidator = (
  requestRules: (ctx: Root) => SchemaOptions,
  joiOpts?: ValidationOptions,
  celebrateOpts?: CelebrateOptions,
): RequestHandler<never, never, never, never> => {
  return celebrate(requestRules(Joi), joiOpts, celebrateOpts);
};
`;
  }
}
