export class CreateBaseValidator {
  public execute(): string {
    return `import { celebrate, Joi, CelebrateOptions, SchemaOptions } fr\om 'celebrate';
import type { Root, ValidationOptions } fr\om 'joi';
import { RequestHandler } fr\om 'express';

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
